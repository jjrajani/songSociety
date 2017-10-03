import React, { Component } from 'react';

class AudioVisualizer extends Component {
    constructor(props) {
        super(props);
        this.createVisualization = this.createVisualization.bind(this);
    }

    componentDidMount() {
        this.createVisualization();
    }
    componentWillUnmount() {}

    createVisualization() {
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
        this.audioSrc = audioSrc;
        this.analyser = analyser;
        this.context = context;

        function renderFrame() {
            let freqData = new Uint8Array(analyser.frequencyBinCount);
            requestAnimationFrame(renderFrame);
            analyser.getByteFrequencyData(freqData);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

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
            };

            let bars = 100;
            for (var i = 0; i < bars; i++) {
                let bar_x = i * 3;
                let bar_width = 1;
                let bar_height = -freqData[i];
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
