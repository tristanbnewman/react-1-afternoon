import React, {Component} from 'react';

class EvenAndOdd extends Component{
    

    constructor(){
        super();
        this.state={
            evenArray: [],
            oddArray: [],
            userInput: ''
    
        }
        // this.state.evenArray = []
        // this.state.oddArray = []
        // this.userInput = ''
    }

    confButtonHandler = (str) =>{
        
        let numArr = str.split(',')
        let evenArr = []
        let oddArr = []
        
        numArr.forEach((num)=>{
            if (num%2 === 0){
                evenArr.push(num)
            }
            else{
                oddArr.push(num)
            }
        })

        this.setState({oddArray: oddArr})
        this.setState({evenArray: evenArr})
        this.state.userInput = ''
        document.getElementById('numInput').value = ''
        console.log(this.state.evenArray)
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" id="numInput" onChange={(e)=>{this.setState({userInput: e.target.value})}}></input>
                <button className="confirmationButton" onClick={() => this.confButtonHandler(this.state.userInput)}>Sort</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    }
}

export default EvenAndOdd;
