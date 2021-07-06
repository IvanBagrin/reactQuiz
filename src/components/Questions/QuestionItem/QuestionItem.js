import React, { Component } from "react";
import Answer from "./Answer";
import "./questionItem.css"

let answer
class QuestionItem extends Component {
    constructor(props) {
        super(props);
      }
    render() {
       
       
        return(
            <div className = {"questionItem"}>
                <div className = {"questionItem__section"}>
                        <div className = "questionItem__count"><span>{this.props.item}</span> / {this.props.quizLength}</div>
                        {/* Данный блок можно использовать для вывода сложности вопроса
                         <div className={"questionItem__difficulty"}>
                        Difficulty: {this.props.data.difficulty}
                        </div> */}
                        <div className = {"questionItem__text"}>
                            {/* Данный блок можно использовать для вывода категории вопроса
                            <div className = "questionItem__category">Question category: {this.props.data.category}</div> */}
                            <div className={"questionItem__question"}>{this.props.data.question}</div>
                        </div>
                        
                        <div className = {"questionItem__button"}>
                            <button  onClick = {this.props.handleButton}>Далее</button>
                        </div>
                </div>
                

               <Answer 
                   incorrect_answers = {this.props.data.incorrect_answers}
                   correct_answer= {this.props.data.correct_answer}
                   selectedOption = {this.props.selectedOption}
                   handleOptionChange = {this.props.handleOptionChange}
               />
               
               
               
            </div>
        )
    }
}

export default QuestionItem;