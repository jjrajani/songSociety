import React from 'react';
import { Carousel } from 'react-bootstrap';

const LandingCarousel = () =>
    <Carousel>
        <Carousel.Item animateIn={true}>
            <div className="carousel_img guitar" />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item animateIn={true}>
            <div className="carousel_img jungle_mixer" />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item animateIn={true}>
            <div className="carousel_img jam_session" />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item animateIn={true}>
            <div className="carousel_img violin" />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>;

export default LandingCarousel;
