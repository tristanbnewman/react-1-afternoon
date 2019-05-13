import React, {Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super()
        this.state={
            unFilteredArray: [{1: 'a', 2: 'b'}, {1: 'mark', 2: 'sam', 3: 'ball'}],
            userInput: '',
            filteredArray: []
        }
    }

    filterButtonHandler = (arg) =>{
        let result = this.state.unFilteredArray.filter((object)=>{
            if(object[arg]) return true
        })

        this.setState({filteredArray: result})
        console.log(this.state.filteredArray)
    }

    render(){
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={(e)=>this.setState({userInput: e.target.value})}></input>
                <button className="confirmationButton" onClick={()=>this.filterButtonHandler(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered Objects: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterObject;
