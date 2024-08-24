/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import QUESTIONS from "../Questions.js";
import quizCompleted from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

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

    return (
        <div>
            <Question
                key={currentActiveQuestion}
                questionIndex={currentActiveQuestion}
                onSelectAnswer={handleSubmitAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
};

export default Quiz;
