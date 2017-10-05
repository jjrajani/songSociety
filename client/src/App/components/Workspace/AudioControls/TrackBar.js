import React, { Component } from 'react';

class TrackBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeDrag: false,
            trackBallLeft: 0
        };
        this.player = null;
    }
    componentDidMount() {
        let player = document.getElementById(this.props.audioPlayerId);
        this.player = player;
        player.addEventListener('timeupdate', this.timeUpdate);
        document.addEventListener('mouseup', this.mouseup);
        document.addEventListener('mousemove', this.mouseMove);
    }

    componentWillUnmount() {
        this.player.removeEventListener('timeupdate', this.timeUpdate);
        document.removeEventListener('mouseup', this.mouseup);
        document.removeEventListener('mousemove', this.mouseMove);
    }

    timeUpdate = e => {
        let { currentTime, duration } = e.target;
        let position = currentTime / duration * 100;

        this.setState({ trackBallLeft: position });
    };

    updateAudioCurrentTime = position => {
        this.player.pause();
        let { duration } = this.player;
        let currentPosition = duration / 100 * position;

        this.player.currentTime = currentPosition;
        this.player.play();
    };

    mousedown = e => {
        this.updateBar(e.pageX);
        this.setState({ timeDrag: true });
    };

    mouseup = e => {
        if (this.state.timeDrag === true) {
            this.updateBar(e.pageX);
            this.setState({ timeDrag: false });
        }
    };

    mouseMove = e => {
        if (this.state.timeDrag === true) {
            this.updateBar(e.pageX);
        }
    };

    getPositionPercent = x => {
        let progress = this.refs.track_bar_wrapper;
        let position = x - progress.getBoundingClientRect().left;
        let percentage = position / progress.offsetWidth * 100;
        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }
        return percentage;
    };

    updateBar = x => {
        let percentage = this.getPositionPercent(x);

        this.updateAudioCurrentTime(percentage);
        this.setState({ trackBallLeft: percentage });
    };

    render() {
        return (
            <div
                id={`${this.props.trackBarWrapperId}_wrapper`}
                className="track_bar_wrapper"
                ref="track_bar_wrapper"
                onMouseDown={this.mousedown}
            >
                <div
                    id={`${this.props.trackBarWrapperId}`}
                    className="track_bar"
                    ref="track_bar"
                >
                    <div
                        className="track_ball"
                        style={{ left: `${this.state.trackBallLeft}%` }}
                    />
                </div>
            </div>
        );
    }
}

export default TrackBar;
