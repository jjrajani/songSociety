import React, { Component } from 'react';

class Visualizer extends Component {
    constructor(props) {
        super(props);
        this.createVisualization = this.createVisualization.bind(this);
    }

    componentDidMount() {
        this.createVisualization();
    }

    createAudio() {
        let audio = document.getElementById(this.props.audioPlayer);
        audio.crossOrigin = 'anonymous';
        return audio;
    }

    connectAudio(audioSrc, context, analyser) {
        audioSrc.connect(analyser);
        audioSrc.connect(context.destination);
        analyser.connect(context.destination);
    }

    createVisualization() {
        let context = new AudioContext();
        let analyser = context.createAnalyser();
        let canvasRef = this.props.canvasId;
        let canvas = this.refs[canvasRef];
        let ctx = canvas.getContext('2d');
        let audio = this.createAudio();
        let audioSrc = context.createMediaElementSource(audio);

        this.connectAudio(audioSrc, context, analyser);

        function renderFrame() {
            let freqData = new Uint8Array(analyser.frequencyBinCount);
            requestAnimationFrame(renderFrame);
            analyser.getByteFrequencyData(freqData);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.sRect = function(x, y, w, h) {
                x = parseInt(x, 10) + 0.5;
                y = parseInt(y, 10) + 0.5;
                const height = canvas.height;
                const barHeight = h;

                var gradient = ctx.createLinearGradient(0, 0, 0, height);
                gradient.addColorStop(0, 'red');
                gradient.addColorStop(0.25, 'yellow');
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
            <div id={this.props.canvasWrapperId}>
                <canvas ref={this.props.canvasId} id={this.props.canvasId} />
            </div>
        );
    }
}

export default Visualizer;
