import React, { Fragment } from 'react';
import LogoutComponent from '../LogoutComponent/LogoutComponent';

const SubNavProfileComponent = () => {
    return (
        <Fragment>
            <a href="#profile">Profile</a>
            <a href="setting">Setting</a>
            <a href="setting">History Buy</a>
            <a href="setting">Saved</a>
            <a href="setting">Favorites Store</a>
            <LogoutComponent/>
        </Fragment>
    );
};

export default SubNavProfileComponent;