import React from 'react';

const Header = () => {
    return (
        <header className="navbar navbar-light navbar-expand flex-column flex-md-row bd-navbar">
            <div className="container">
                <h1 className="navbar-brand text-white">Bol Meesterbrein</h1>
                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex ">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fab fa-facebook-square text-white"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fab fa-instagram text-white"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fab fa-twitter text-white"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fab fa-linkedin text-white"/></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><i className="fab fa-youtube text-white"/></a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;