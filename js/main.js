"use strict";

let current_spine;
// Base viewport size (larger viewport = smaller character)
const BASE_VIEWPORT_SIZE = 1500;
// Base position (original default position)
const BASE_X = -500;
const BASE_Y = 700;
// Character parameters
let character_scale = 1.0;  // 1.0 = normal, 2.0 = 2x larger, 0.5 = half size
let character_x = 0;         // -100 to 100, positive = right, negative = left
let character_y = 0;         // -100 to 100, positive = up, negative = down
let isAnimating = false;

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
                    x: BASE_X - character_x * 10,
                    y: BASE_Y - character_y * 10,
                    width: BASE_VIEWPORT_SIZE / character_scale,
                    height: BASE_VIEWPORT_SIZE / character_scale,
                    padLeft: "10%",
                    padRight: "10%",
                    padTop: "10%",
                    padBottom: "10%"
                },
                'action': {
                    x: BASE_X - character_x * 10,
                    y: BASE_Y - character_y * 10,
                    width: BASE_VIEWPORT_SIZE / character_scale,
                    height: BASE_VIEWPORT_SIZE / character_scale,
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
    if (!isAnimating) {
        isAnimating = true;
        change_animation();
    }
});

const change_animation = async () => {
    let entry = current_spine.setAnimation('action');
    await sleep(entry.animationEnd - 0.21);
    if (isAnimating) {
        isAnimating = false;
        current_spine.setAnimation('idle');
    }
}

function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
// end delete

// Wallpaper Engine property listener
window.wallpaperPropertyListener = {
    applyUserProperties: function(properties) {
        if (properties.character_scale) {
            character_scale = properties.character_scale.value;
        }
        if (properties.character_x) {
            character_x = properties.character_x.value;
        }
        if (properties.character_y) {
            character_y = properties.character_y.value;
        }

        // Recreate spine player with new settings
        if (current_spine) {
            create_spine_player();
        }
    }
};
