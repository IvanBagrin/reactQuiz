import React, { Component } from "react";
import Questions from "./Questions/Questions";
import axios from 'axios';

import '../styles/App.css';



class App extends Component {

    state = {
        data: [],

    }
    componentDidMount() {
        
        axios.get(`https://opentdb.com/api.php?amount=4`)
        .then(res => {
          const data = res.data.results;
          
         this.setState({ data });
        })
    }

    handleButtonNewTest(){
        this.setState({ data: [] });

        axios.get(`https://opentdb.com/api.php?amount=4`)
        .then(res => {
          const data = res.data.results;
          
         this.setState({ data });
        })
    }
    render() {
        return (
            <div className={"App"}>
                {
                    this.state.data.length ? 
                            <Questions 
                            data = {this.state.data}
                            handleButtonNewTest  = {this.handleButtonNewTest.bind(this)}
                             /> 
                        : 
                            <div className = {"App__loader"}>
                            <div className="lds-ripple"><div></div><div></div></div>
                            
                            </div>
                }
               


            </div>
        );
    }
}

export default App;