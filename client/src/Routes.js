import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { Home as HomeView, About as AboutView, Contact as ContactView, Blog as BlogHub, Ticket as TicketHub, NotFound as NotFoundView } from './views';

function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route path="/about" component={AboutView} />
                <Route path="/contact" component={ContactView} />
                <Route path="/blog" component={BlogHub} />
                <Route path="/ticket" component={TicketHub} />
                <Route path="/not-found" component={NotFoundView} />
                <Redirect to="/not-found" />
            </Switch>
        </div>
    )
}


export default Routes;
