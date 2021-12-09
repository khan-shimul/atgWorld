import React from 'react';
import { Container } from 'react-bootstrap';
import { CreateAccount } from '../../Shared/CreateAccount/CreateAccount';
import './Banner.css';

const Banner = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <section>
            <div className="details-banner d-flex text-white">
                <Container>
                    <div className="d-block d-sm-block d-md-none d-lg-none">
                        <div className="phone-banner d-flex align-items-center justify-content-between">
                            <p className="fs-5"><i className="fas fa-arrow-left"></i></p>
                            <button className="btn-join" onClick={() => setModalShow(true)}>Join Group</button>
                            <CreateAccount
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </div>
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