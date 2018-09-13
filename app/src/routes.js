import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NotFound from './components/error/NotFound';
import Products from './components/products/Products';
import Product from './components/products/Product';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home/>
    },
    {
        path: "/about",
        exact: false,
        main: () => <About/>
    },
    {
        path: "/contact",
        exact: false,
        main: () => <Contact/>
    },
    {
        path: "/products",
        exact: false,
        main: ({match, location}) => <Products match={match} location={location}/>
    },
    {
        path: "/products/:name",
        exact: false,
        main: ({match}) => <Product match={match}/>
    },
    {
        path: "/login",
        exact: false,
        main: ({location}) => <Login location={location}/>
    },
    {
        path: "/profile",
        exact: false,
        main: ({location}) => <Profile location={location}/>
    },
    {
        path: "",
        exact: false,
        main: () => <NotFound/>
    },
];

export default routes;