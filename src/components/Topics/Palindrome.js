import React, {Component} from 'react';

class Palindrome extends Component{
    constructor(){
        super()
        this.state={
            palindrome: '',
            userInput: ''
        }
    }

    palindromeHandler = (arg) =>{
        
        let argArray = arg.split('')
        let argRev = argArray.reverse()
        let argRevStr = argRev.join('')

        console.log(argRevStr)

        if(arg === argRevStr){
            this.setState({palindrome: 'Is palindrome'})
        }
        else{
            this.setState({palindrome: 'Is not palindrome'})
        }
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=>this.setState({userInput: e.target.value})}></input>
                <button className="confirmationButton" onClick={()=>this.palindromeHandler(this.state.userInput)}>Palindrate</button>
                <span className="resultsBox">Result: {this.state.palindrome}</span>
            </div>
        );
    }
}

export default Palindrome;
