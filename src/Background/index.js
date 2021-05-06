import React from 'react';
import './style.css';

const backgroundVideo =
    'https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1406990/915b1b4a05133186525a956d7ca5c142a3c3c9f3.webm';

const Background = () => {
    return (
        <div className="Background">
            <video
                autoPlay
                muted
                loop
                id="BackgroundVideo"
                onContextMenu={(event) => event.preventDefault()}
            >
                <source src={backgroundVideo} />
            </video>
        </div>
    );
};

export default Background;
