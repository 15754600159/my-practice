import React from 'react';

import './logo.css';

class Logo extends React.Component{
    render() {
        return (
            <div className="logo-container">
                <img src={require('./job.jpg')} alt="logo"/>
            </div>
        )
    }
}

export default Logo;