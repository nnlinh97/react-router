import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

const menus = [
    {
        lable: "Home",
        to: "/",
        exact: true
    },
    {
        lable: "About",
        to: "/about",
        exact: false
    },
    {
        lable: "Contact",
        to: "/contact",
        exact: false
    }
];

// khi muốn custom thì dùng thẻ Link
//muốn thêm style cho thẻ thì dùng NavLink
const MenuLink = ({ lable, to, activeOnlyWhenExact }) => { //lable: vd Trang chủ, to: href, activeOnlyWhenExact: exact true/false
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => { //match: trùng khớp với url đang chọn hay không?
                let className = match ? "active" : "";
                return (
                    <li className={className}>
                        <Link to={to}>
                            {lable}
                        </Link>
                    </li>
                )
            }}
        />
    )
}


class Menu extends Component {
    render() {
        return (
            <div>
                {/* menu */}
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        {/* <li>
                            <a href="/">Home</a>
                            thẻ Link không thể thêm style nên phải dùng thẻ NavLink
                            exact dùng để kiểm tra xem có đúng đường dẫn hay không
                            <NavLink activeStyle={{ backgroundColor: 'white', color: 'red' }} exact to="/">Home</NavLink>
                            <NavLink activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ backgroundColor: 'white', color: 'red' }} to="/about">About</NavLink>
                            <NavLink activeClassName="active" to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={{ backgroundColor: 'white', color: 'red' }} to="/contact">Contact</NavLink>
                            activeClassName để thêm class thôi
                            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
                        </li> */}
                        {this.showMenus(menus)}
                    </ul>
                </nav>
                {/* content */}
                {/* exact dùng để kiểm tra xem có đúng đường dẫn hay không */}
            </div>
        );
    }

    showMenus = (menus) => {
        let result = null;
        if(menus.length > 0){
            result = menus.map((menu, index) => {
                return (
                    <MenuLink 
                        key={index} 
                        lable={menu.lable} 
                        to={menu.to} 
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}

export default Menu;