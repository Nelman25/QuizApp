/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import QUESTIONS from "../Questions.js";
import quizCompleted from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

const Quiz = () => {
    const [answerState, setAnswerState] = useState("");
    const [userAnswers, setUserAnswers] = useState([]);

    const currentActiveQuestion =
        answerState === "" ? userAnswers.length : userAnswers.length - 1;
    const quizIsComplete = currentActiveQuestion === QUESTIONS.length;

    const handleSubmitAnswer = useCallback(
        (selectedAnswer) => {
            setAnswerState("answered");
            setUserAnswers((prevState) => {
                return [...prevState, selectedAnswer];
            });

            setTimeout(() => {
                if (
                    selectedAnswer ===
                    QUESTIONS[currentActiveQuestion].answers[0]
                ) {
                    setAnswerState("correct");
                } else {
                    setAnswerState("wrong");
                }

                setTimeout(() => {
                    setAnswerState("");
                }, 2000);
            }, 1000);
        },
        [currentActiveQuestion]
    );

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
                questionText={QUESTIONS[currentActiveQuestion].text}
                answers={QUESTIONS[currentActiveQuestion].answers}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                answerState={answerState}
                onSelectAnswer={handleSubmitAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
};

export default Quiz;
