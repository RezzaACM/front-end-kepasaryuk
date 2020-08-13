import React, { useState, Fragment, useEffect } from 'react';
import './NavbarComponent.scss'
import LogoutComponent from '../LogoutComponent/LogoutComponent';
import { BellOutlined, ShoppingCartOutlined, MessageOutlined, GithubOutlined, MenuOutlined } from '@ant-design/icons';
import { Skeleton } from 'antd';
import 'antd/dist/antd.css'
import SubNavProfileComponent from '../SubNavProfileComponent/SubNavProfileComponent';
import SubNavNotifikasiComponent from '../SubNavNotifikasiComponent/SubNavNotifikasiComponent';


const NavbarComponent = () => {

    const [isDisplay, setIsDisplay] = useState('hidden')
    const [isShow, setIsShow] = useState(true)
    const [isMinSize, setMinSize] = useState(false)

    const showSubNav = (e) => {
        // alert('ok')
        e.preventDefault()
        if (isDisplay === 'hidden') {
            setIsDisplay('visible')
            // document.body.style.background = "#494949";
        }
        // console.log(document.body.);
    }

    const onLeave = () => {
        // document.body.style.background = "white";
        setIsDisplay('hidden')
    }

    useEffect(() => {
        const minWidt = window.matchMedia('(max-width:376px)').matches;
        if (minWidt === true) {
            setMinSize(true)
        }
        setTimeout(() => {
            setIsShow(false);
        }, 1000);
    }, [])

    return (
        <Fragment>
            <div className="navbar fixed-top">
                <div className={isMinSize ? '' : 'container'}>
                    <div className="logo">
                        <img
                            src={process.env.PUBLIC_URL + '/logo123.png'}
                            alt="logo_kepasaryuk"
                        />
                        <button><MenuOutlined /> </button>
                    </div>
                    <div className="category">
                        <button className="button">Category</button>
                    </div>
                    <div className="search">
                        <input className="form-search" placeholder="search here"></input>
                    </div>
                    <div className="nav-point">
                        <a href="#shop" className="button button-low"><ShoppingCartOutlined /></a>
                        <a href="#shop" className="button button-low" ><BellOutlined /></a>
                        <a href="#shop" className="button button-low"><MessageOutlined /></a>

                        <div className="subnav"
                            onMouseEnter={showSubNav}
                            onMouseLeave={onLeave}>
                            <button className="button"><ShoppingCartOutlined /></button>
                            <div className="subnav-content cart" style={{ visibility: isDisplay }}>
                                {
                                    isShow ? <Skeleton active="true" /> : <SubNavNotifikasiComponent />
                                }
                            </div>
                        </div>
                        <div className="subnav"
                            onMouseEnter={showSubNav}
                            onMouseLeave={onLeave}
                        >
                            <button className="button" ><BellOutlined /></button>
                            <div className="subnav-content notif" style={{ visibility: isDisplay }}>
                                {
                                    isShow ? <Skeleton active="true" /> : <SubNavNotifikasiComponent />
                                }
                            </div>
                        </div>
                        <div className="subnav"
                            onMouseEnter={showSubNav}
                            onMouseLeave={onLeave}
                        >
                            <button className="button" ><MessageOutlined /></button>
                            <div className="subnav-content notif" style={{ visibility: isDisplay }}>
                                {
                                    isShow ? <Skeleton active="true" /> : <SubNavNotifikasiComponent />
                                }
                            </div>
                        </div>
                        <span className="sparator"></span>
                        <div className="subnav"
                            onMouseEnter={showSubNav}
                            onMouseLeave={onLeave}
                        >
                            <button className="button"><GithubOutlined /></button>
                            <div className="subnav-content profile" style={{ visibility: isDisplay }}>
                                {
                                    isShow ? <Skeleton active="true" /> : <SubNavProfileComponent />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="##"
                style={{ display: isDisplay === 'hidden' ? 'none' : 'block' }}
                className="backdrop">&nbsp;</a>
        </Fragment>
    );
};

export default NavbarComponent;