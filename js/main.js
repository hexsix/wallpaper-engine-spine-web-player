"use strict";

let current_spine;
let spine_size = 1500;
let spine_x = -500;
let spine_y = 700;

const create_spine_player = () => {

    document.getElementById("player-container").innerHTML = "";

    current_spine = new spine41.SpinePlayer("player-container", {
        skelUrl: "./assets/sakura/sakura.skel",
        atlasUrl: "./assets/sakura/sakura.atlas",
        backgroundColor: "00000000",
        alpha: true,
        premultipliedAlpha: true,
        preserveDrawingBuffer: true,
        animations: ['idle', 'action'],
        viewport: {
            animations: {
                'idle': {
                    x: spine_x,
                    y: spine_y,
                    width: spine_size,
                    height: spine_size,
                    padLeft: "10%",
                    padRight: "10%",
                    padTop: "10%",
                    padBottom: "10%"
                },
                'action': {
                    x: spine_x,
                    y: spine_y,
                    width: spine_size,
                    height: spine_size,
                    padLeft: "10%",
                    padRight: "10%",
                    padTop: "10%",
                    padBottom: "10%"
                },
            }
        },
        skin: 'bg',
        showControls: false,
        showLoading: false,
        success: function (player) {
            player.play();
        },
    });

}

window.onload = () => {
    create_spine_player()
};

// delete the following code if you don't wanna click to change animation
document.getElementById('player-container').addEventListener('click', function (event) {
    change_animation();
});

const change_animation = async () => {
    let entry = current_spine.setAnimation('action');
    await sleep(entry.animationEnd - 0.21);
    current_spine.setAnimation('idle');
}

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
// end delete
