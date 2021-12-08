import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import './AllPost.css';
import img1 from '../../../../images/post/1.png'
import img2 from '../../../../images/post/2.png'
import img3 from '../../../../images/post/3.png';
import authImg1 from '../../../../images/author/auth1.png';
import authImg2 from '../../../../images/author/auth2.png';
import authImg3 from '../../../../images/author/auth3.png';
import authImg4 from '../../../../images/author/4.png';
import Post from '../Post/Post';

export const posts = [
    { id: 1, type: 'Article', title: 'What if famous brands had regular fonts? Meet RegulaBrands!', sub: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…', img: img1, author: 'Sarthak Kamra', authImg: authImg1, views: '1.4k' },
    { id: 2, type: 'Education', title: 'Tax Benefits for Investment under National Pension Scheme launched by Government', sub: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…', img: img2, author: 'Sarah West', authImg: authImg2, views: '1.4k' },
    { id: 3, type: 'Meetup', title: 'Finance & Investment Elite Social Mixer @Lujiazui', date: 'Fri, 12 Oct, 2018', location: 'Ahmedabad, India', img: img3, author: 'Sarah West', authImg: authImg3, views: '1.4k', site: 'www.demo.com' },
    { id: 4, type: 'Job', title: 'Software Developer', office: 'Innovaccer Analytics Private Ltd.', location: 'Noida, India', author: 'Joseph Gray', authImg: authImg4, views: '1.4k', site: 'www.demo.com' }
]

const AllPost = () => {
    return (
        <section className="">
            <div className="all-post-container row">
                <div className="col-md-8 d-flex">
                    <h5 className="ms-2">Post</h5>
                    <h5 className="ms-2">Article</h5>
                    <h5 className="ms-2">Event</h5>
                    <h5 className="ms-2">Education</h5>
                    <h5 className="ms-2">Job</h5>
                </div>
                <div className="col-md-4 d-flex">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Write a Post
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <Button className="ms-2" variant="primary">Join Group</Button>
                </div>
                <hr className="brder mx-auto" />
            </div>
            <div className="container">
                <div className="header-mobile d-sm-block d-md-none mt-3">
                    <div className="d-flex justify-content-between">
                        <h4>Posts</h4>
                        <button className="btn btn-secondary">Filter</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AllPost;