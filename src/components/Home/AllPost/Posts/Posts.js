import React from 'react';
import { Row } from 'react-bootstrap';
import { posts } from '../AllPost/AllPost';
import Post from '../Post/Post';

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
                    <h2>ksdfksadjfk</h2>
                </div>
            </div>
        </div>
    );
};

export default Posts;