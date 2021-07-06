import React, { Component } from "react";
import './EndOfTest.css';
class EndOfTest extends Component {
    constructor(props) {
        super(props);
        };
    render()
    {
        let checkTrueAnswer = false;
        return(
            <div className = {"endoftest"}>
                {this.props.data.map((item, index) => {
                    let j = Math.floor(Math.random() * 100000);
                    item.correct_answer == this.props.answer[index] ? checkTrueAnswer == true :  checkTrueAnswer == false;
                    return <div  key = {j}>
                                
                                <div className = {item.correct_answer == this.props.answer[index] ? "endoftest__item answer__true" : "endoftest__item answer__false"}>
                                
                                    <div>
                                        {item.question}
                                    </div>
                                    <div>
                                        {this.props.answer[index] === "" ? "Вы не ответили" : `Ваш ответ: ${this.props.answer[index]}` }
                                    </div>
                                    
                                </div>
                        </div>
                })}
                <div className = {"endoftest__checkPasset"}>
                    {checkTrueAnswer ? "Тест пройден!!!" : "Тест не пройден!!!"}
                </div>

                <button className = {"endoftest__button"} onClick={this.props.handleButtonReboot}>Пройти еще раз</button>
                <button className = {"endoftest__button"} onClick={this.props.handleButtonNewTest}>Новый тест</button>
            </div>
        )
    }
}

export default EndOfTest;