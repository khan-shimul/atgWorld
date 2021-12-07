import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <section>
            <div className="details-banner d-flex text-white">
                <Container>
                    <div className="banner-text">
                        <h2 className="fw-bold">Computer Engineering</h2>
                        <p>142,765 Computer Engineers follow this</p>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Banner;