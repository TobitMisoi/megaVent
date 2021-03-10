import React from 'react';
import BlogData from '../../store/BlogData';
import { pricing } from '../../store/Data';
import Blog from './Blog';
import Pricing from './Pricing';


function WhyJoin({
    cp,
    cf,
    cr,
    ck,
    heading1,
    postHeading1Text,
    icon_1,
    icon_2,
    icon_3,
    icon_4,
    heading3_1,
    heading3_2,
    heading3_3,
    heading3_4,
    postHeading3_1Text,
    postHeading3_2Text,
    postHeading3_3Text,
    postHeading3_4Text
}) {
    return (
        <>
            <section className="home__whyJoin">
                <div className="home__whyJoin-container">
                    <div className="row whyJoinTransheading">
                        <h1>
                            {heading1}
                        </h1>
                    </div>
                    <div className="row whyJoinText">
                        <p>
                            <font>
                                {postHeading1Text}
                            </font>
                        </p>
                    </div>
                    {
                        cp
                            ? //Prices permit
                            <>
                                {
                                    cf
                                        ? //Blog permit
                                        <>
                                            <div className="row whyJoinInspire">
                                                <div className="inspire">
                                                    <ul className={cr ? "inspire-content" : "sponsor-content"}>

                                                        <li>
                                                            <div className={cr ? "whyJoin__content" : "ourSponsors__content"}>
                                                                {cf ? <>{icon_1}</> : null}
                                                                <h3>{cf ? <>{heading3_1}</> : null}</h3>
                                                                <p>
                                                                    {cf ? <>{postHeading3_1Text}</> : null}
                                                                </p>

                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={cr ? "whyJoin__content" : "ourSponsors__content"}>
                                                                {cf ? <>{icon_2}</> : false}
                                                                <h3>{cf ? <>{heading3_2}</> : null}</h3>
                                                                <p>
                                                                    {cf ? <>{postHeading3_2Text}</> : null}
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className={cr ? "whyJoin__content" : "ourSponsors__content"}>
                                                                {cf ? <>{icon_3}</> : null}
                                                                <h3>{cf ? <>{heading3_3}</> : null}</h3>
                                                                <p>
                                                                    {cf ? <>{postHeading3_3Text}</> : null}
                                                                </p>
                                                            </div>
                                                        </li>
                                                        {ck ?
                                                            <>
                                                                <li>
                                                                    <div className={cr ? "whyJoin__content" : "ourSponsors__content"}>
                                                                        {cf ? <>{icon_4}</> : null}
                                                                        <h3>{cf ? <>{heading3_4}</> : null}</h3>
                                                                        <p>
                                                                            {cf ? <>{postHeading3_4Text}</> : null}
                                                                        </p>
                                                                    </div>
                                                                </li>
                                                            </> : null
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <Blog {...BlogData} />
                                        </>
                                }
                            </>
                            :
                            <>
                                <Pricing {...pricing} />
                            </>
                    }
                </div>
            </section>
        </>
    )
}

export default WhyJoin;
