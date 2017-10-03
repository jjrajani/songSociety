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

            ctx.sRect = function(x, y, w, h) {
                x = parseInt(x) + 0.5;
                y = parseInt(y) + 0.5;
                const height = canvas.height;
                const barHeight = h;

                var gradient = ctx.createLinearGradient(0, 0, 0, height);
                gradient.addColorStop(0, 'red');
                gradient.addColorStop(0.2, 'yellow');
                gradient.addColorStop(0.5, 'yellow');
                gradient.addColorStop(0.6, 'green');
                ctx.fillStyle = gradient;
                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.fillRect(x, height, w, barHeight / height * 100);

                // this.fillRect(x, y, w, h);
            };
            // ctx.fillStyle = '#9933ff';
            let bars = 100;
            for (var i = 0; i < bars; i++) {
                let bar_x = i * 3;
                let bar_width = 1;
                let bar_height = -freqData[i];
                // ctx.sRect(bar_x, canvas.height, bar_width, bar_height);
                ctx.sRect(bar_x, canvas.height, bar_width, bar_height);
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
