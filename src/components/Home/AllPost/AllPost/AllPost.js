import React from 'react';
import './AllPost.css';
import img1 from '../../../../images/post/1.png';
import img2 from '../../../../images/post/2.png';
import img3 from '../../../../images/post/3.png';
import authImg1 from '../../../../images/author/auth1.png';
import authImg2 from '../../../../images/author/auth2.png';
import authImg3 from '../../../../images/author/auth3.png';
import authImg4 from '../../../../images/author/4.png';
import joinGroup from '../../../../images/icons/join.png';
import pencil from '../../../../images/icons/whitepen.png';
import { NavLink } from 'react-router-dom';

export const posts = [
    { id: 1, type: '✍️ Article', title: 'What if famous brands had regular fonts? Meet RegulaBrands!', sub: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…', img: img1, author: 'Sarthak Kamra', authImg: authImg1, views: '1.4k' },
    { id: 2, type: '🔬️ Education', title: 'Tax Benefits for Investment under National Pension Scheme launched by Government', sub: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…', img: img2, author: 'Sarah West', authImg: authImg2, views: '1.4k' },
    { id: 3, type: '🗓️ Meetup', title: 'Finance & Investment Elite Social Mixer @Lujiazui', date: 'Fri, 12 Oct, 2018', location: 'Ahmedabad, India', img: img3, author: 'Sarah West', authImg: authImg3, views: '1.4k', site: 'www.demo.com' },
    { id: 4, type: '💼️ Job', title: 'Software Developer', office: 'Innovaccer Analytics Private Ltd.', location: 'Noida, India', author: 'Joseph Gray', authImg: authImg4, views: '1.4k', site: 'www.demo.com' }
]

const AllPost = () => {
    return (
        <section className="sticky-md-top bg-white">
            <div className="all-post-container row">
                <div className="nested-routes col-md-8 d-flex">
                    <NavLink style={({ isActive }) => {
                        return {
                            display: "block",
                            color: isActive ? "black" : "",
                            fontWeight: isActive ? "600" : ''
                        };
                    }} to="/" className="ms-2">All Post({posts.length})</NavLink>
                    <NavLink to="/home/article" className="ms-2">Article</NavLink>
                    <NavLink to="/home/event" className="ms-2">Event</NavLink>
                    <NavLink to="/home/education" className="ms-2">Education</NavLink>
                    <NavLink to="/home/job" className="ms-2">Job</NavLink>
                </div>
                <div className="col-md-4 d-flex">
                    <div className="dropdown">
                        <button className="btn btn-filter btn- dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Write a Post
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Job Post</a>
                            <a className="dropdown-item" href="#">Event Post</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <button className="ms-2 btn bg-primary fw-bold text-white" variant="primary"><img src={joinGroup} alt="" /> Join Group</button>
                </div>
                <hr className="brder mx-auto" />
            </div>
            <div className="container">
                <div className="header-mobile d-sm-block d-md-none d-lg-none d-xl-none my-4">
                    <div className="d-flex justify-content-between">
                        <h4 className="text-dark fw-bold">Posts({posts.length})</h4>
                        <div className="dropdown">
                            <button className="btn btn-filter dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter:All
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Post</a>
                                <a className="dropdown-item" href="#">Article</a>
                                <a className="dropdown-item" href="#">Event</a>
                                <a className="dropdown-item" href="#">Education</a>
                                <a className="dropdown-item" href="#">Job</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit-container text-end fixed-bottom d-sm-block d-md-none d-lg-none d-xl-none m-5">
                    <div className="dropdown">
                        <button className="btn btn-locate" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={pencil} alt="" />
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Noida, India</a>
                            <a className="dropdown-item" href="#">Mumbai, India</a>
                            <a className="dropdown-item" href="#">Delhi, India</a>
                            <a className="dropdown-item" href="#">Punjab, India</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AllPost;