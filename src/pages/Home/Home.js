import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import LogoutComponent from '../../components/LogoutComponent/LogoutComponent';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import './Home.scss'
import { CiCircleFilled } from '@ant-design/icons';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isScreen: true
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                isScreen: false
            })
        }, 500);
    }


    render() {
        // if (!this.props.isLogin && !this.props.access_token) {
        //     return (
        //         <Redirect to={'/login'} />
        //     )
        // }
        if (this.state.isScreen === true) {
            return <SplashScreen />
        } else {
            return (
                <div className="wrapper">
                    <div className="item ">
                        <img src="https://images.unsplash.com/photo-1597037722480-9da3b764e2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1067&q=80" alt="sadwad" />
                    </div>
                    <div className="item">
                        <img src="https://source.unsplash.com/11H1SSVcIxc/1600x900" alt="sadwad" />
                    </div>
                    <div className="item">
                        <img src="https://images.unsplash.com/photo-1597037722480-9da3b764e2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1067&q=80" alt="sadwad" />
                    </div>
                    <div className="item">
                        <img src="https://images.unsplash.com/photo-1597037722480-9da3b764e2e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1067&q=80" alt="sadwad" />
                    </div>
                    <div className="button-carousel">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin,
        access_token: state.access_token
    }
}

export default connect(mapStateToProps)(Home);