import React,{Component} from "react";
import { NavLink } from 'react-router-dom';
import "./index.scss";
class Home extends Component{

    render(){

        return <div className="home-style">
            {/* 推荐 */}
            
            <ul >
                <li><NavLink alt="a" to="/home/recommended">推荐</NavLink></li>
                <li><NavLink alt="a" to="/home/furniture">家具</NavLink></li>
                <li><NavLink alt="a" to="/home/household">家居</NavLink></li>
                <li><NavLink alt="a" to="/home/activity">活动</NavLink></li>
            </ul>
            {this.props.children}
        </div>
    }
}


export default Home

