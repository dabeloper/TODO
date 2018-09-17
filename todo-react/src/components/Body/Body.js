import React ,  { Component } from "react";

class Body extends Component {

    //LifeCicle 1
    constructor (props){
        super(props);
        this.state = {
            count: 0
        };
    }

    //LifeCicle 2
    componentWillMount(){
        this.setState({
            count: 10
        })
    }

    //LifeCicle 3
    render(){
        return (<div onClick={this.handlerClick.bind(this)}>
            Hello {this.props.user}!!! <br/>
            Has clicked {this.state.count} times
        </div>);
    }

    //LifeCicle 4
    componentDidMount(){
        this.setState({
            count: 15
        })
    }


    //LifeCicle Final (OnDestroy)
    componentWillUnmount(){
        this.setState({
            count: 50
        })
    }

    handlerClick(){
        this.setState({ count: this.state.count+1});
    }
}

export default Body;