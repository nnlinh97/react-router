import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Product from './Product';
import { Route } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';

class Products extends Component {
    render() {
        let userLogged = localStorage.getItem('user');
        if (userLogged === null) {
            let {location} = this.props;
            return (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: {
                            from: location
                        }
                    }}
                />
            );
        }
        let products = [
            {
                id: 1,
                slug: "iphone-X",
                name: "Iphone X",
                price: 999
            },
            {
                id: 2,
                slug: "samsung-galaxy-s8",
                name: "Samsung Galaxy S8",
                price: 799
            },
            {
                id: 3,
                slug: "sony-XA1",
                name: "Sony XA1",
                price: 499
            },
        ];
        let { match, location } = this.props;
        let { url } = match;
        // console.log(match)
        let element = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}$
                    </li>
                </NavLink>
            );
        });

        return (
            <div className="container">
                <h1> Products List</h1>
                <div className="row">
                    <ul className="list-group">
                        {element}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:slug" component={Product} />
                </div>
            </div>
        );
    }
}

export default Products;