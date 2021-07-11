import React from 'react'
import Navbar from './topNavbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Notifications from '../Pages/Notifications';
import Settings from '../Pages/Settings';
import Create from '../Pages/Create';

function Navibar() {
    return (
        <div>
          <Router>
            <Navbar/>
            <Switch>
                
                <Route path ='/notifications' component={Notifications}></Route>
                <Route path ='/profile' component={Profile}></Route>
                <Route path ='/create' component={Create}></Route>
                <Route path ='/profile' component={Settings}></Route>
            </Switch>
          </Router>
        </div>
    )
}

export default Navibar;
