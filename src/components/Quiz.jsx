/* eslint-disable no-unused-vars */
import { useState } from "react";
import QUESTIONS from "../Questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const currentActiveQuestion = userAnswers.length;
    const quizIsComplete = currentActiveQuestion === QUESTIONS.length;

    const handleSubmitAnswer = (selectedAnswer) => {
        setUserAnswers((prevState) => {
            return [...prevState, selectedAnswer];
        });
    };

    if (quizIsComplete) {
        return (
            <div className="bg-white rounded-xl sm:max-w-[700px] mx-auto my-16 p-12 border border-slate-300 shadow-2xl flex flex-col text-center items-center justify-center  ease-in duration-500 translate-y-[-20px]">
                <h1 className="text-5xl font-bold text-purple-700 mb-8">
                    Quiz Complete!
                </h1>
                <img src={quizCompleteImg} alt="Trophy image" />
            </div>
        );
    }

    const shuffledAnswer = [...QUESTIONS[currentActiveQuestion].answers];
    shuffledAnswer.sort(() => Math.random() - 0.5);

    return (
        <div className="flex justify-center items-center w-2/3 mx-auto">
            <div className="flex-1 bg-white lg:max-w-[700px] py-16 px-16 sm:min-h-[600px] rounded-xl shadow-2xl border border-slate-500">
                <QuestionTimer
                    timeout={10000}
                    onTimeout={() => handleSubmitAnswer(null)}
                />
                <h2 className="text-3xl font-bold leading-normal max-sm:text-lg text-center">
                    {QUESTIONS[currentActiveQuestion].text}
                </h2>
                <ul className="mt-12">
                    {shuffledAnswer.map((answer) => (
                        <li
                            key={answer}
                            className="bg-blue-500 font-bold text-center mb-4 rounded-full shadow-md hover:text-white hover:bg-purple-600 hover:translate-y-[-4px] ease-in duration-200 active:translate-y-0"
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
        </div>
    );
};

export default Quiz;
