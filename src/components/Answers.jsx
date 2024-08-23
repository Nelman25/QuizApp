import { useRef } from "react";

/* eslint-disable react/prop-types */
const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }

    return (
        <ul className="text-2xl font-bold font-palanquin">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let styling = "";

                if (answerState === "answered" && isSelected) {
                    styling = "selected";
                }

                if (
                    (answerState === "correct" || answerState === "wrong") &&
                    isSelected
                ) {
                    styling = answerState;
                }
                return (
                    <li key={answer} className="min-w-[450px]">
                        <button
                            onClick={() => onSelect(answer)}
                            className={`text-white py-4 px-8 rounded-full mb-4 w-full shadow-md transition-all hover:scale-103 hover:translate-y-[-6px] hover:bg-yellow-400 hover:text-slate-800 border border-slate-400 active:translate-y-0 ${
                                styling === "" ? "bg-blue-500" : `${styling}`
                            }`}
                        >
                            {answer}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default Answers;
