import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../functions/Button';

function Pricing({ icon_1, icon_2, icon_3 }) {
    return (
        <>
            <div className="pricing-section">
                <ul className="pricing-cards">
                    <li className="pricing__cards">
                        <div className="pricing-avatar">
                            {icon_1}
                        </div>
                        <ul className="pricing-description">
                            <li>
                                <font>
                                    Access to Booth
                                </font>
                            </li>
                            <li>
                                <font>
                                    Conference Tickets
                                </font>
                            </li>
                            <li>
                                <font>
                                    Printed Materials
                                </font>
                            </li>
                        </ul>
                        <div className="price">
                            <font>
                                $0.00
                            </font>
                        </div>
                        <Link to="/pricing">
                            <Button buttonSize="btn--medium" buttonColor="green">
                                Buy Now
                            </Button>
                        </Link>
                    </li>
                    <li className="pricing__cards">
                        <div className="pricing-avatar">
                            {icon_2}
                        </div>
                        <ul className="pricing-description">
                            <li>
                                <font>
                                    Access to Booth
                                </font>
                            </li>
                            <li>
                                <font>
                                    Conference Tickets
                                </font>
                            </li>
                            <li>
                                <font>
                                    Printed Materials
                                </font>
                            </li>
                        </ul>
                        <div className="price">
                            <font>
                                $99.00
                            </font>
                        </div>
                        <Link to="/pricing">
                            <Button buttonSize="btn--medium" buttonColor="green">
                                Buy Now
                            </Button>
                        </Link>
                    </li>
                    <li className="pricing__cards">
                        <div className="pricing-avatar">
                            {icon_3}
                        </div>
                        <ul className="pricing-description">
                            <li>
                                <font>
                                    Access to Booth
                                </font>
                            </li>
                            <li>
                                <font>
                                    Conference Tickets
                                </font>
                            </li>
                            <li>
                                <font>
                                    Printed Materials
                                </font>
                            </li>
                        </ul>
                        <div className="price">
                            <font>
                                $149.00
                            </font>
                        </div>
                        <Link to="/pricing">
                            <Button buttonSize="btn--medium" buttonColor="green">
                                Buy Now
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Pricing;
