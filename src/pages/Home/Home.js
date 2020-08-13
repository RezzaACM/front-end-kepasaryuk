import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import LogoutComponent from '../../components/LogoutComponent/LogoutComponent';
import SplashScreen from '../../components/SplashScreen/SplashScreen';
import './Home.scss';
import CarouselComponent from '../../components/CarouselHeaderComponent/CarouselComponent';


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
                <Fragment>
                    <h1>This is Home</h1>
                    {/* <CarouselComponent />< */}
                </Fragment>
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