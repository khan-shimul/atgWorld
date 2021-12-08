import React from 'react';
import Header from '../../Shared/Header/Header';
import AllPost from '../AllPost/AllPost/AllPost';
import Posts from '../AllPost/Posts/Posts';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <AllPost />
            {/* <Posts /> */}
        </div>
    );
};

export default Home;