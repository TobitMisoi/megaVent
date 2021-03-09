import React from 'react';
import { SiEventbrite } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="home__footer">
                <div className="footer__logo">
                    <i>
                        <SiEventbrite />
                    </i>
                </div>
                <ul className="footer-links">
                    <li>
                        <Link to="/">
                            <font>
                                About
                            </font>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <font>
                                Contact
                            </font>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <font>
                                Terms and Conditions
                            </font>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <font>
                                Privacy
                            </font>
                        </Link>
                    </li>
                </ul>
                <div className="c-copyright">
                    <font>
                        &copy; 2020
                    </font>
                </div>
            </footer>
        </>
    )
}

export default Footer;
