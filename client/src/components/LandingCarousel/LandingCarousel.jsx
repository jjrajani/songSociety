import React from 'react';
import { Carousel } from 'react-bootstrap';
import slides from './slides';

const LandingCarousel = () =>
    <Carousel>
        {slides.map((s, i) => {
            return (
                <Carousel.Item animateIn={true} key={i}>
                    <div className={`carousel_img ${s.img}`} />
                    <Carousel.Caption>
                        <h3>
                            {s.captionHader}
                        </h3>
                        <p>
                            {s.captionBlurb}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            );
        })}
    </Carousel>;

export default LandingCarousel;
