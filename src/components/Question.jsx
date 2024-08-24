/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";
import QUESTIONS from "../Questions.js";

const Question = ({ questionIndex, onSelectAnswer, onSkipAnswer }) => {
    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null,
    });

    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    };

    let answerState = "";

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "wrong";
    } else if (answer.selectedAnswer) {
        answerState = "answered";
    }

    return (
        <div className="flex flex-col justify-center items-center border px-8 border-slate-400 rounded-xl py-8 mx-auto shadow-2xl text-center max-w-[900px] max-xl:w-full">
            <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
            <h2 className="font-bold font-montserrat my-8 text-4xl text-slate-700">
                {QUESTIONS[questionIndex].text}
            </h2>
            <Answers
                answers={QUESTIONS[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
};

export default Question;
