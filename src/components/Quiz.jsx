/* eslint-disable no-unused-vars */
import { useState } from "react";
import QUESTIONS from "../Questions.js";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const currentlyActiveQuestion = userAnswers.length;

    function handleSubmitAnswer(selectedAnswer) {
        setUserAnswers((prevState) => {
            return [...prevState, selectedAnswer];
        });
    }

    return (
        <div className="w-[50%] shadow-xl h-80% mx-auto my-16 p-16 bg-white rounded-xl">
            <h1 className="text-2xl text-center m-8 text-slate-600 font-bold">
                {QUESTIONS[currentlyActiveQuestion].text}
            </h1>
            <ul className="w-[90%] my-4 mx-auto">
                {QUESTIONS[currentlyActiveQuestion].answers.map((answer) => (
                    <li
                        key={answer}
                        className="bg-blue-500 font-bold text-center mb-4 rounded-full shadow-md hover:bg-blue-600 hover:translate-y-[-4px] ease-in duration-300 active:translate-y-0"
                    >
                        <button
                            onClick={() => handleSubmitAnswer(answer)}
                            className="w-full text-2xl py-4"
                        >
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;
