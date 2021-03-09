import React from 'react';
import { Link } from 'react-router-dom';
import BlogFetch from '../../functions/BlogFetch';

function Blog({ blogDispImg, blogTitle }) {
    return (
        <>
        <BlogFetch />
            <div className="home__blog">
                <section className="blog-container">
                    <ul className="blog__items">
                        <li className="blog-item">
                            <Link to="/" className="blog-item-link">
                                <ol className="blog-dspl">
                                    <li>
                                        <div className="blog-displ-image">
                                            {blogDispImg}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="blog-displ-title">
                                            <h4>
                                                {blogTitle}
                                            </h4>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="blog-displ-meta">
                                            <ul>
                                                <li className="blog-views">
                                                    
                                                </li>
                                                <li className="blog-commented">

                                                </li>
                                                <li className="blog-date">

                                                </li>
                                            </ul>

                                        </div>
                                    </li>
                                    <li>
                                        <div className="blog-displ-text">

                                        </div>
                                    </li>
                                </ol>
                            </Link>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Blog;
