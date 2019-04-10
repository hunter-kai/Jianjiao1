import React,{Component} from "react";
import {NavLink} from 'react-router-dom';

class Tabbar extends Component{

    render(){

        return <div>
            <ul>
                <li><NavLink to="/home">shouye</NavLink></li>
                <li><NavLink to="/classification">fenlei</NavLink></li>
                <li><NavLink to="/shopcar">gouwuche</NavLink></li>
                <li><NavLink to="/message">xinxi</NavLink></li>
                <li><NavLink to="/my">wode</NavLink></li>
                
            </ul>
        </div>
    }
}


export default Tabbar

