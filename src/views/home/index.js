import React,{Component} from "react";


class Home extends Component{

    render(){

        return <div>
            home
            {this.props.children}
        </div>
    }
}


export default Home

