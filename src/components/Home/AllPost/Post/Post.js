import React, { useState } from 'react';
import './Post.css';
import share from '../../../../images/icons/share.png';
import eye from '../../../../images/icons/eyes.png';
import dateIcon from '../../../../images/icons/date.png';
import workIcon from '../../../../images/icons/work.png';
import placeHolder from '../../../../images/icons/placeHolder.png';

const Post = ({ post }) => {
    const { title, type, sub, img, author, authImg, views, date, location, office } = post;
    const [isClicked, setClicked] = useState(false);
    if (isClicked) {

    }
    return (
        <div className="col single-card">
            <div className="card">
                {
                    img && <img src={img} className="card-img-top" alt="..." />
                }
                <div className="card-body">
                    <h6>{type}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="title">{title}</h5>
                        <div className="dropdown">
                            <button
                                onClick={() => setClicked(true)}
                                className={isClicked ? 'h-75 btn btn-dot' : 'btn bg-white fs-4'} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="dot">...</span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Edit</a>
                                <a className="dropdown-item" href="#">Report</a>
                                <a className="dropdown-item" href="#">Option 3</a>
                            </div>
                        </div>
                    </div>
                    {
                        date && <div>
                            <div className="d-flex">
                                <p className="me-5 other-info medium-text"><img src={dateIcon} alt="" /> {date}</p>
                                <p className="medium-text"><img src={placeHolder} alt="" /> {location}</p>
                            </div>
                            <button className="btn-regular visit-site1">Visit Website</button>
                        </div>
                    }
                    {
                        type === '💼️ Job' && <div>
                            <div className="d-flex">
                                <p className="me-5 medium-text"><img src={workIcon} alt="" /> {office}</p>
                                <p className="medium-text"><img src={placeHolder} alt="" /> {location}</p>
                            </div>
                            <button className="btn-regular visit-site2">Apply on Timesjobs</button>
                        </div>
                    }

                    <p className="card-text text-secondary">{sub}</p>
                    <div className="auth-container d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="me-2" src={authImg} alt="" />
                            <div>
                                <h6 className="auth-name fw-bold">{author}</h6>
                                <h6 className="views d-block d-sm-block d-md-none d-lg-none d-xl-none">{views} views</h6>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                <h6 className="me-2 views"><img src={eye} alt="" /> {views} views</h6>
                            </div>
                            <img style={{ cursor: 'pointer', marginTop: '-10px' }} src={share} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Post;