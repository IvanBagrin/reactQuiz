import React, { Component, useState, useEffect} from "react";
import "./Answer.css"

export default function Answer(props) {
   let answer = props.incorrect_answers;
        answer.push(props.correct_answer)
        answer = answer.filter(function(item, pos) {
            return answer.indexOf(item) == pos;
        })
        answer = answer.sort();
            return (
                <div className = {"answer"}>
                {answer.map((item, index) => {
                   let j = Math.floor(Math.random() * 100000);
                    return <div  className = "radio" key = {j}>
                                <label className = "radio__item">
                                    <input className = {"radio__answer"} type="radio" value={item} onChange = {props.handleOptionChange} checked={props.selectedOption === item}/>
                                    {item}
                                </label>
                        </div>
                    
                    
                            
               })}
                </div>
            )
       
    }
