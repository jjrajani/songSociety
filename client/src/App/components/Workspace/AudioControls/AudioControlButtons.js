import React from 'react';
import { Glyphicon } from 'react-bootstrap';

const AudioControlButtons = ({ buttons, audioSrcId }) =>
    <div className="audio_nav">
        {buttons.map((control, i) => {
            return (
                <div
                    key={i}
                    id={control.glyph_wrapper_id || ''}
                    className={control.glyph_wrapper_class || ''}
                >
                    <Glyphicon
                        glyph={control.glyph}
                        onClick={() => control.onClick(audioSrcId)}
                        title={control.title}
                    />
                </div>
            );
        })}
    </div>;

export default AudioControlButtons;
