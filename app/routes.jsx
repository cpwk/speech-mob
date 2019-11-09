import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'


import HomeWrap from './component/HomeWrap';
import Home from "./component/page/Home";
import Course from "./component/page/Course";
import BrandShow from "./component/page/BrandShow";
import Article from "./component/page/Article";


const routes = (
    <HashRouter>
        <Switch>
            <Route path='/article/:id' component={Article}/>
            <Route path='/' children={() => (
                <HomeWrap>
                    <Switch>
                        <Route path='/' exact component={Home}/>
                        <Route path='/course/:tabKey' component={Course}/>
                        <Route path='/brandShow' component={BrandShow}/>
                    </Switch>
                </HomeWrap>
            )}>
            </Route>

        </Switch>
    </HashRouter>
);


export default routes;
