import React from 'react';
import { Provider } from 'react-redux';
import GreetingContainer from './greeting/gretting_container';
import LogInFormContainer from './login_form/login_form_container';
import SignUpFormContainer from './login_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SearchContainer from './benches/search_container';

import { 
    Route, Redirect, Switch,
    Link, HashRouter
} from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <Link to='/'>
                <h1> Bench BnB</h1>
            </Link>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute path='/login' component={LogInFormContainer}/>
            <AuthRoute path='/signup' component={SignUpFormContainer}/>
            <Route exact path="/" component={SearchContainer} />
        </Switch>
    </div>
);

export default App;