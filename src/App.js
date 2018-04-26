import React from 'react'
import Login from './components/Login'
import TopNav from './components/TopNav'
import Signup from './components/Signup'
import UserProfile from './components/UserProfile'
import './App.css'
import {Route, Link, Redirect, Switch, withRouter} from 'react-router-dom'
import {connect} from "react-redux";


export const App = ({history, user, loggedIn, nextPage}) => {
    console.log(user);
    console.log("path:", history.location.pathname, nextPage)

    if (nextPage !== null && nextPage !== undefined && history.location.pathname !== nextPage) {
        history.push(nextPage)
    }

    return (
        <div>
            <TopNav/>

            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/profile" render={props => <UserProfile {...props}/>}/>
            </Switch>

            <Route exact path="/" render={() => <Redirect to="/login"/>}/>
        </div>
    )
};

const mapStateToProps = state => ({
    user: state.auth.user,
    loggedIn: state.auth.loggedIn,
    nextPage: state.auth.nextPage
});

export default withRouter(connect(mapStateToProps, null)(App))
