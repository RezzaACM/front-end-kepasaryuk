import React, { Fragment, useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { Switch, Route, useLocation } from 'react-router-dom';
import routes from './routes/appRoutes';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import SidebarComponent from './components/SidebarComponent/SidebarComponent';

function App(props) {

  const [isSticky, setIsSticky] = useState(false)


  const myfunction = () => {
    window.addEventListener("scroll", function (event) {
      let doc = document.documentElement;
      let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

      // console.log(top);
      if (top > 25) {
        // window.document.body.style.background = 'red';
        setIsSticky(true)
      }



    }, false);
  }

  useEffect(() => {
    myfunction()
  })

  let location = useLocation().pathname;
  // const offOrOn = navigator.onLine
  // if()
  return (
    <Fragment>
      {location === '/login' ? '' : <NavbarComponent />}
      <div id="wrappe" className="wrappe container">
        <div className={`side ${isSticky ? 'sticky':''}`}>
          <SidebarComponent />
        </div>
        <div className="middle">
          <Switch>
            {routes.map((route, i) => <Route key={i} {...route} />)}
          </Switch>
        </div>
      </div>
      {location === '/login' ? '' : <FooterComponent />}
    </Fragment>
  );
}

export default App;
