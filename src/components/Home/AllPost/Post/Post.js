import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Post = ({ post }) => {
    const { title, type, sub, img, author, authImg, views } = post
    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6>{type}</h6>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{sub}</p>
                    <div className="auth-container d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <img className="me-2" src={authImg} alt="" />
                            <h5>{author}</h5>
                        </div>
                        <div className="d-flex align-items-center">
                            <h6>{views}</h6>
                            <button className="btn btn-secondary">Share</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Post;