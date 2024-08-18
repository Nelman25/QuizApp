/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import QUESTIONS from "../Questions.js";
import quizCompleted from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);

    const currentActiveQuestion = userAnswers.length;    
    const quizIsComplete = currentActiveQuestion === QUESTIONS.length;

    const handleSubmitAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevState) => {
            return [...prevState, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => {
        handleSubmitAnswer(null);
    }, [handleSubmitAnswer]);

    if (quizIsComplete) {
        return (
            <div>
                <h1>Quiz Complete!</h1>
                <img src={quizCompleted} alt="trophy image" />
            </div>
        );
    }

    const shuffledAnswer = [...QUESTIONS[currentActiveQuestion].answers];
    shuffledAnswer.sort(() => Math.random() - 0.5);

    return (
        <div className="flex flex-col justify-center items-center border px-8 border-slate-400 rounded-xl py-8 mx-auto shadow-2xl text-center max-w-[900px] max-xl:w-full">
            <QuestionTimer
                key={currentActiveQuestion}
                timeout={10000}
                onTimeout={handleSkipAnswer}
            />
            <h2 className="font-bold font-montserrat my-8 text-4xl text-slate-700">
                {QUESTIONS[currentActiveQuestion].text}
            </h2>
            <ul className="text-2xl font-bold font-palanquin">
                {shuffledAnswer.map((answer) => (
                    <li key={answer} className="min-w-[450px]">
                        <button
                            onClick={() => handleSubmitAnswer(answer)}
                            className="text-white bg-blue-500 py-4 px-8 rounded-full mb-4 w-full shadow-md transition-all hover:scale-103 hover:translate-y-[-6px] hover:bg-yellow-400 hover:text-slate-800 border border-slate-400 active:translate-y-0"
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
