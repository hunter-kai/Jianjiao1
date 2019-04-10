import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import App from "../App";
import React from "react";
import Home from "../views/home/index";
import Classification from "../views/classification/index";
import Shopcar from "../views/shopcar/index";
import My from "../views/my/index";
import Message from "../views/message/index";
import Activity from "../views/home/activity";
import Recommended from "../views/home/recommended";
import Household from "../views/home/household";
import Furniture from "../views/home/furniture";

const routes =(
    <Router>
        <App>
            <Switch>
                <Route path="/home" component = {()=>
                //二级路由
                    <Home>
                        <Switch>
                            <Route path="/home/activity" component = {Activity}/>
                            <Route path="/home/recommended" component = {Recommended}/>
                            <Route path="/home/household" component = {Household}/>
                            <Route path="/home/furniture" component = {Furniture}/>
                            <Redirect from="/home" to= "/home/recommended"  />
                        </Switch>
                    </Home>
                }/>

                
                {/* <Route path="/classification" component = {()=><Classification><Classification/>}/> */}
                {/* <Route path="/classification" render = {Classification}/> */}
                
                <Route path="/classification" component = {Classification}/>
                <Route path="/shopcar" component = {Shopcar}/>
                <Route path="/my" component = {My}/>
                <Route path="/message" component = {Message}/>
                <Redirect from="/" to= "/home"  />
                {/* redirect是模糊匹配 */}
            </Switch>
        </App>
    </Router>
) 



export default routes