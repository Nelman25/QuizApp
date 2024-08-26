/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import QUESTIONS from "../Questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

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
        return <Summary userAnswers={userAnswers} />;
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
