import React,{Component} from "react";


class Household extends Component{

    constructor(props){
        super(props)

        this.state = {
            datalist: []
        }
    }

    componentDidMount(){
        fetch("/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1555289979354").then(res => res.json()).then(res => {
            console.log(res.data.modules);
            
            this.setState({
                datalist: res.data.modules
            })
        })
    
    
    console.log(111)
    
    }

    render(){

        return <div>

            {this.state.datalist?
            <div>
                
                Household
                {this.state.datalist.id}
            uahduiahuhukahdk</div>
            :null}
            
        </div>
    }
}


export default Household

