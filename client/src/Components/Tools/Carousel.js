import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Functions/Button';

function Carousel({ eventHeading, eventImageSource, carousel }) {
    return (
        <>
            <div className="carousel-area">
                <div className="carousel-container">
                    <div className="carousel-description">
                        <h1>
                            {eventHeading}
                        </h1>
                        <div className="carousel__showcase-link">
                            <Link to="/">
                                {carousel ? <>
                                    <div className="lpc">
                                        <Button buttonSize="btn--medium" buttonColor="green">
                                            Buy Tickets
                                        </Button>
                                    </div>
                                    <div className="lpc">
                                        <Button buttonSize="btn--small" buttonColor="red">
                                            Know More
                                        </Button>
                                    </div>
                                </>
                                    : <p>Hello</p>
                                }

                            </Link>
                        </div>
                    </div>
                    <div className="carousel-background">
                        <img src={eventImageSource} alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Carousel;
