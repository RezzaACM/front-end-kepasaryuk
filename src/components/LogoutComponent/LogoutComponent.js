import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ActionType from '../../modules/redux/reducer/globalActionType';

const LogoutComponent = (props) => {
    // const math = useRouteMatch();
    const history = useHistory()

    const logout = () => {
        props.handleLogout(false)
        localStorage.removeItem('user_data');
        history.push({
            pathname: '/login'
        })
    }


    return (
        <div style={{ display: 'inline', cursor: 'pointer' }}>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            {/* <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a>
            <a href="#logout" style={{ display: 'inline-block' }} onClick={logout} >Logout</a> */}
        </div >
    );
};

const mapsDispatchToProps = dispatch => ({
    handleLogout: (value) => dispatch({ type: ActionType.LOGOUT, value })
})

export default connect(null, mapsDispatchToProps)(LogoutComponent);