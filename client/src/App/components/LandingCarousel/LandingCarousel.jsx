import React from 'react';
import { Carousel } from 'react-bootstrap';
// images and captions for carousel
import slides from './slides';

const LandingCarousel = () =>
    <Carousel pauseOnHover={false} interval={5500}>
        {slides.map((s, i) => {
            return (
                <Carousel.Item animateIn={true} key={i}>
                    <div className={`carousel_img ${s.img}`} />
                    <Carousel.Caption>
                        <h3>
                            {s.captionHeader}
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
