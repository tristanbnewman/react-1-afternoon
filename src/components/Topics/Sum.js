import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super()
        this.state={
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    sumHandler = () =>{
        
        
        let sum = this.state.number1 + this.state.number2
        this.setState({sum: sum})
    }

    updateNumber1 = (number1) =>{
        this.setState({number1: parseInt(number1)})
    }
    updateNumber2 = (number2) =>{
        this.setState({number2: parseInt(number2)})
    }

    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e)=>this.updateNumber1(e.target.value)}></input>
                <input className="inputLine" onChange={(e)=>this.updateNumber2(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.sumHandler()}>Add</button>
                <span className="resultsBox">Result: {this.state.sum}</span>
            </div>
        );
    }
}

export default Sum;
