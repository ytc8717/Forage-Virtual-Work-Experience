import React from 'react';
import './Banner.css';

function Banner ({bannerText}) {
    return (
        <div className="Banner">
            <h1>{bannerText}</h1>
        </div>
    );
}

export default Banner;
