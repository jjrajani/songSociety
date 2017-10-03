import React, { Component } from 'react';

class AudioVisualizer extends Component {
    constructor(props) {
        super(props);
        this.color = {
            r: 0,
            g: 0,
            b: 0
        };
        this.createVisualization = this.createVisualization.bind(this);
    }

    componentDidMount() {
        this.createVisualization();
    }

    createVisualization() {
        let color = {
            r: 0,
            g: 0,
            b: 1
        };
        let nextColorDirection = 'up';

        function getNextColor(color) {
            // console.log(color === { r: 255, g: 255, b: 230 });
            if (color.r === 255 && color.g === 255 && color.b === 230) {
                nextColorDirection = 'down';
            } else if (color.r === 0 && color.g === 0 && color.b === 0) {
                nextColorDirection = 'up';
            }
            // console.log(nextColorDirection);
            return nextColorDirection === 'down'
                ? getNextColorDown(color)
                : getNextColorUp(color);
        }

        function getNextColorUp(color) {
            let { r, g, b } = color;
            let newColor;
            b < 230
                ? (newColor = { r: r, g: g, b: b + 1 })
                : g < 255
                  ? (newColor = { r: r, g: g + 1, b: b })
                  : r < 255
                    ? (newColor = { r: r + 1, g: g, b: b })
                    : (newColor = { r: 255, g: 255, b: 230 });
            return newColor;
        }
        function getNextColorDown(color) {
            let { r, g, b } = color;
            let newColor;
            r > 0
                ? (newColor = { r: r - 1, g: g, b: b })
                : g > 0
                  ? (newColor = { r: r, g: g - 1, b: b })
                  : b > 0
                    ? (newColor = { r: r, g: g, b: b - 1 })
                    : (newColor = { r: 0, g: 0, b: 0 });
            return newColor;
        }

        let context = new AudioContext();
        let analyser = context.createAnalyser();
        let canvas = this.refs.analyzerCanvas;
        let ctx = canvas.getContext('2d');
        let audio = document.getElementById('workspace_audio_player');
        audio.crossOrigin = 'anonymous';
        let audioSrc = context.createMediaElementSource(audio);
        audioSrc.connect(analyser);
        audioSrc.connect(context.destination);
        analyser.connect(context.destination);

        let framesRendered = 0;

        function renderFrame() {
            framesRendered += 1;
            let freqData = new Uint8Array(analyser.frequencyBinCount);
            requestAnimationFrame(renderFrame);
            analyser.getByteFrequencyData(freqData);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            if (framesRendered % 7 === 0) {
                color = getNextColor(color);
            }

            ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
            ctx.sRectNew = function(
                horizontalPacement,
                verticalPlacement,
                barWidth,
                barHeight
            ) {
                barHeight = -barHeight;
                let maxGreenHeight = 40;
                let maxYellowHeight = 20;
                let greenBottom = verticalPlacement;
                let yellowBottom = verticalPlacement - maxGreenHeight;
                let redBottom =
                    verticalPlacement - maxGreenHeight - maxYellowHeight;

                // green bar
                // if max green height more than barheight
                if (maxGreenHeight > barHeight) {
                    ctx.fillStyle = 'green';
                    this.fillRect(
                        horizontalPacement,
                        greenBottom,
                        barWidth,
                        barHeight
                    );
                } else {
                    // if maxGreenHeight < barHeight
                    ctx.fillStyle = 'green';
                    this.fillRect(
                        horizontalPacement,
                        greenBottom,
                        barWidth,
                        maxGreenHeight
                    );
                }

                //  Yellow Bar
                //  if max yellow height more than bar height minus maxGreen bar
                if (maxYellowHeight > barHeight - maxGreenHeight) {
                    // draw remaining barHeight - maxGreenHeight
                    ctx.fillStyle = 'yellow';
                    this.fillRect(
                        horizontalPacement,
                        greenBottom,
                        barWidth,
                        maxGreenHeight
                    );
                }
            };

            // ctx.sRectNew = function(
            //     horizontalPacement,
            //     verticalPlacement,
            //     barWidth,
            //     barHeight
            // ) {
            //     let green = 40;
            //     let greenBottom = verticalPlacement;
            //     let yellow = 20;
            //     let yellowBottom = verticalPlacement - green;
            //     let redBottom = verticalPlacement - green - yellow;
            //     // if barHeight less than max green
            //     if (barHeight + green > 0) {
            //         // draw only green bar
            //         ctx.fillStyle = 'green';
            //         this.fillRect(
            //             horizontalPacement,
            //             greenBottom,
            //             barWidth,
            //             barHeight
            //         );
            //         // if barHeight more than max green
            //     } else if (barHeight + green < 0) {
            //         // draw full green height
            //         ctx.fillStyle = 'green';
            //         this.fillRect(
            //             horizontalPacement,
            //             yellowBottom,
            //             barWidth,
            //             green
            //         );
            //         // remove green bar from total barHeight
            //         let yellowHeight = barHeight + green;
            //         // if barHeight less than green height + yellow height
            //         if (yellowHeight + yellow > 0) {
            //             // draw yellow bar remaining height moved up above green bar
            //             ctx.fillStyle = 'yellow';
            //             this.fillRect(
            //                 horizontalPacement,
            //                 yellowBottom,
            //                 barWidth,
            //                 afterGreenHeight
            //             );
            //             // if afterGreen and yellowHeight less than barHeight
            //         } else if (yellowHeight + yellow < 0) {
            //             ctx.fillStyle = 'yellow';
            //             this.fillRect(
            //                 horizontalPacement,
            //                 yellowBottom,
            //                 barWidth,
            //                 afterGreenHeight + yellow
            //             );
            //         }
            //     }
            // };

            ctx.sRect = function(x, y, w, h) {
                x = parseInt(x) + 0.5;
                y = parseInt(y) + 0.5;

                if (h < -60) {
                    let redZone = h + 60;
                    ctx.fillStyle = 'red';
                    this.fillRect(x, y - 60, w, redZone);

                    // this.fillRect(x, y + h, w, h - lessHeight);
                    ctx.fillStyle = 'yellow';
                    this.fillRect(x, y - 40, w, -20);

                    ctx.fillStyle = 'green';
                    this.fillRect(x, y, w, -40);
                    // this.fillRect(x, y + h - lessHeight, w, h);
                } else {
                    ctx.fillStyle = `green`;
                    this.fillRect(x, y, w, h);
                }
            };
            // ctx.fillStyle = '#9933ff';
            let bars = 500;
            for (var i = 0; i < bars; i++) {
                let bar_x = i * 3;
                let bar_width = 1;
                let bar_height = -(freqData[i] / 2.85);
                // ctx.sRect(bar_x, canvas.height, bar_width, bar_height);
                ctx.sRectNew(bar_x, canvas.height, bar_width, bar_height);
            }
        }
        renderFrame();
    }

    render() {
        return (
            <div className="App">
                <div id="mp3_player">
                    <canvas ref="analyzerCanvas" id="analyzer" />
                </div>
            </div>
        );
    }
}

export default AudioVisualizer;
