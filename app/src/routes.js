import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import NotFound from './components/error/NotFound';

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
        path: "",
        exact: false,
        main: () => <NotFound/>
    },
];

export default routes;