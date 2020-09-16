import React from 'react';
import { Link } from 'react-router-dom';
import { SiEventbrite } from 'react-icons/si';


function Navbar({ src }) {
    return (
        <>
            <nav className="navigation">
                <div className="navigation-container">
                    <div className="navbar__logo">
                        <font>
                            <span>mega</span>Vent

                        </font>
                        <div className="logo-displ">
                            <SiEventbrite />
                        </div>
                    </div>
                    <ul className="item-links">
                        <li className="item">
                            <Link to="/">
                                <font>
                                    Home
                                </font>
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/">
                                <font>
                                    Schedule
                                </font>
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/">
                                <font>
                                    Blog
                                </font>
                            </Link>
                        </li>

                        <li className="item">
                            <Link to="/">
                                <font>
                                    Tickets
                                </font>
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/">
                                <font>
                                    Contact
                                </font>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
