import React, { useState } from 'react';
import './Post.css';

const Post = ({ post }) => {
    const { title, type, sub, img, author, authImg, views, date, location, office } = post;
    const [isClicked, setClicked] = useState(false);
    if (isClicked) {

    }
    return (
        <div className="col">
            <div className="card">
                {
                    img && <img src={img} className="card-img-top" alt="..." />
                }
                <div className="card-body">
                    <h6>{type}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{title}</h5>
                        <div className="dropdown">
                            <button
                                onClick={() => setClicked(true)}
                                className={isClicked ? 'h-75 btn btn-secondary fs-4 pb-1' : 'btn bg-white fs-4'} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ...
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
                                <p className="me-5">{date}</p>
                                <p>{location}</p>
                            </div>
                            <button className="btn-regular visit-site1">Visit Website</button>
                        </div>
                    }
                    {
                        type === '💼️ Job' && <div>
                            <div className="d-flex">
                                <p className="me-5">{office}</p>
                                <p>{location}</p>
                            </div>
                            <button className="btn-regular visit-site2">Apply on Timesjobs</button>
                        </div>
                    }

                    <p className="card-text">{sub}</p>
                    <div className="auth-container d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="me-2" src={authImg} alt="" />
                            <h5>{author}</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-none d-sm-none d-md-block d-lg-block d-xl-block">
                                <h6 className="me-2">{views} views</h6>
                            </div>

                            <button className="btn btn-secondary">share</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Post;