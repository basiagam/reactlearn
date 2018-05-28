import * as React from "react"
import ReactDOM from "react-dom"

class DateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }
    render(){
        const dateStr = this.state.date.toString();
        return <time>{dateStr}</time>
    }

    updateDate(){
        this.setState({
            date: new Date()
        });
    }

    componentDidMount(){
        this.timerId = window.setInterval(this.updateDate.bind(this),1000)
        this.timerId = window.setInterval(this.updateDate.bind(this))
    }

    componentWillUnmount(){
        window.clearInterval(this.timerId)
    }
}