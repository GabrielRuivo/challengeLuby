import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Repositories from './pages/Repositories';
import Followers from './pages/Followers';
import Following from './pages/Following';
import HomeFollow from './pages/Home/HomeFollow';
import LogicTest from './logicTest';
 
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/repositories" component={Repositories} />
        <Route path="/followers" component={Followers} />
        <Route path="/following" component={Following} />
        <Route path="/home-follow" component={HomeFollow} />
        <Route path="/test" component={LogicTest} />
      </Switch>
    </BrowserRouter>
  )
}