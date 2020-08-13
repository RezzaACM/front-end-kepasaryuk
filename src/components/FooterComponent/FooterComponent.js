import React from 'react';
import './FooterComponent.scss'

const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <div className="footer-logo">
                            <img src={process.env.PUBLIC_URL + '/logo123.png'} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;