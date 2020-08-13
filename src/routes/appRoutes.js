import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

const routes = [
  {
    name: "Login",
    component: Login,
    exact: true,
    path: "/login",
  },
  {
    name: 'Home',
    component: Home,
    exact: true,
    path: '/'
  }
];

export default routes;
