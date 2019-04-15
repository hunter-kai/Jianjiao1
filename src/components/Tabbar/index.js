import React,{Component} from "react";
import {NavLink} from 'react-router-dom';
import "./index.scss";

class Tabbar extends Component{

    render(){

        return <div className="footer">
            <ul className="footer-ul">
                <li><NavLink alt="a" to="/home">首页</NavLink></li>
                <li><NavLink alt="a" to="/classification">分类</NavLink></li>
                <li><NavLink alt="a" to="/shopcar">购物车</NavLink></li>
                <li><NavLink alt="a" to="/message">信息</NavLink></li>
                <li><NavLink alt="a" to="/my">我的</NavLink></li>
                
            </ul>
        </div>
    }
}


export default Tabbar

