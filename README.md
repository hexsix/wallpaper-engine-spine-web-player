# wallpaper-engine-spine-web-player

An example of creating a Spine Web Player in Wallpaper Engine.

## Installation

```git clone https://github.com/hexsix/wallpaper-engine-spine-web-player```

Or download as .zip and extract.

## How to use

Replace `./assets/sakura/` and modify `./js/main.js`

```js
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
```

## How to launch

The program make CORS requests to load the files needed, meaning it cannot be launched as is.   The easiest way to make it work locally is by using the extension Live Server in Visual Studio Code.

## Features

You can click to change the animation.

## Json vs Skel

By default, the program works with .skel files. If you use .json files for your animations, please go to ```js/main.js```, add ```jsonUrl```.

## Credits

Spine web player made by esoteric software, learn more about it at <http://esotericsoftware.com/spine-player>.

Fork from template made by Koshirei <https://github.com/Koshirei> and the template is used for the Nikke-db website <https://github.com/Nikke-db/Nikke-db.github.io>.
