import React, { Component } from 'react';

class TrackBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seeker
    }
  }
    componentDidMount() {
        let player = document.getElementById(this.props.audioPlayerId);
        player.addEventListener('durationchange', this.setupSeekbar);
        player.addEventListener('timeupdate', this.updateUI);
    }

    setupSeekbar = e => {
        console.log('setup seekbar', e.timeStamp);
    };

    updateUI = e => {
        console.log('updateUI', e);
    };

    seek = e => {
        console.log('mousedown seek', e);
    };

    render() {
        return (
            <div className="track_bar_wrapper">
                <div className="track_bar" onMouseDown={}>
                    <div className="seeker" onMouseDown={this.seek} />
                </div>
            </div>
        );
    }
}

export default TrackBar;
