import React, { Component } from "react";
import QuestionItem from "./QuestionItem/QuestionItem";
import EndOfTest from "./EndOfTest/EndOfTest"
import "./Questions.css"

class Questions extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            item: 0,
            selectedOption: '',
            answer: [],
            testEnd: false,

        };

        this.handleButton = this.handleButton.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleButtonReboot = this.handleButtonReboot.bind(this);
        this.handleButtonNewTest = this.handleButtonNewTest.bind(this);
      }

      handleOptionChange(changeEvent) {
        this.setState({
            selectedOption: changeEvent.target.value
        })
      }

      handleButton() {
        let answer = this.state.answer;
        answer.push(this.state.selectedOption);
          if(this.state.item < this.props.data.length-1) {
            
            this.setState({
                item: this.state.item + 1,
                answer,
                selectedOption: ''

            })
          } else {
              //Тест окончен
              this.setState({
                testEnd: true
              })
          }
          
      }

      handleButtonReboot() {
        this.setState({
            item: 0,
            selectedOption: '',
            answer: [],
            testEnd: false,
        })
      }

      handleButtonNewTest() {
        this.setState({
            item: 0,
            selectedOption: '',
            answer: [],
            testEnd: false,
        })
        this.props.handleButtonNewTest()
        
      }
      
        

    render() {
        return(
            <div className = {"questions"}>
                {
                    !this.state.testEnd ?
                        <QuestionItem 
                            data = {this.props.data[this.state.item]}
                            item = {this.state.item+1}
                            quizLength = {this.props.data.length}
                            handleButton = {this.handleButton}
                            handleOptionChange = {this.handleOptionChange}
                            selectedOption = {this.state.selectedOption}
                        />
                        :
                        <EndOfTest
                            data = {this.props.data}
                            answer = {this.state.answer}
                            handleButtonReboot={this.handleButtonReboot}
                            handleButtonNewTest = {this.handleButtonNewTest}
                        />
                }
                   
                
            </div>
        )
    }
}

export default Questions;