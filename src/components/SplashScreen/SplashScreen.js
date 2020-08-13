import React from 'react';
import './SplashScreen.scss';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";

const SplashScreen = () => {
    return (
        <div className="splash-screen">
            <div className="spinner">
                <BeatLoader
                    
                    color={"#61F111"}
                />
            </div>
        </div>
    );
};

export default SplashScreen;