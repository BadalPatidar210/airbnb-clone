import React, { useState } from 'react';
import './Banner.css';
import Search from './Search'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Banner() {
    const history = useHistory();
    const [showSearch , setShowSearch ] = useState(false);
    return (
        <div className="banner">
            <div className="banner-search">
            {showSearch && <Search />}
            <Button variant="outlined" onClick={() => setShowSearch(!showSearch)} className="banner-search-button">{showSearch ? "Hide" : "Search Dates" }</Button>
            </div>
            <div className="banner-info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you</h5>
                <Button onClick={()=> history.push("/search")} variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;
