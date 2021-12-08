import React from 'react';
import { posts } from '../AllPost/AllPost';
import Post from '../Post/Post';
import './Post.css';

const Posts = () => {
    return (
        <div className="posts-container">
            <div className="container mx-auto row">
                <div className="col-md-8 col-12">
                    <div className="row row-cols-1 row-cols-md-1 g-4">
                        {
                            posts.map(post => <Post
                                key={post.id}
                                post={post}
                            />)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="select-location-container">
                        <div className="input-group mb-3 fs-6">
                            <select className="location-in form-select" id="inputGroupSelect01">
                                <option selected>Noida, India</option>
                                <option value="1">Mumbai, India</option>
                                <option value="2">Delhi, India</option>
                                <option value="3">Punjab, India</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-secondary">Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;