import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super()
        this.state={
            unFilteredArray: ['James', 'John', 'Tristan', 'Taylor', 'Mark'],
            userInput: '',
            filteredArray: []
        }
    }

    filterButtonHandler = (arg) =>{
        let result = this.state.unFilteredArray.filter(str => !str.search(arg))

        this.setState({filteredArray: result})

        console.log(result)
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText"></span>
                <input className="inputLine" onChange={(e)=>this.setState({userInput: e.target.value})}></input>
                <button className="confirmationButton" onClick={()=>this.filterButtonHandler(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        );
    }
}

export default FilterString;
