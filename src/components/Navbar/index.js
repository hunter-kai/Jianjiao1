import React,{Component} from "react";
import {NavLink} from 'react-router-dom';
import "./index.scss";

class Navbar extends Component{

    render(){

        return <div className="navbar">
            <p><NavLink >尖叫设计</NavLink></p>
            <div>
                <span><NavLink>搜索我的尖叫好物</NavLink></span>
            </div>
        </div>
    }
}


export default Navbar;