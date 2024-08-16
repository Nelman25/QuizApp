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
        <div>
            <QuestionTimer
                key={currentActiveQuestion}
                timeout={10000}
                onTimeout={handleSkipAnswer}
            />
            <h2>{QUESTIONS[currentActiveQuestion].text}</h2>
            <ul>
                {shuffledAnswer.map((answer) => (
                    <li key={answer}>
                        <button onClick={() => handleSubmitAnswer(answer)}>
                            {answer}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Quiz;
