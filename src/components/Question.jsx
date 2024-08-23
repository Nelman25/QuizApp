/* eslint-disable react/prop-types */
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Question = ({
    questionText,
    answers,
    selectedAnswer,
    answerState,
    onSelectAnswer,
    onSkipAnswer,
}) => {
    return (
        <div className="flex flex-col justify-center items-center border px-8 border-slate-400 rounded-xl py-8 mx-auto shadow-2xl text-center max-w-[900px] max-xl:w-full">
            <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
            <h2 className="font-bold font-montserrat my-8 text-4xl text-slate-700">
                {questionText}
            </h2>
            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={onSelectAnswer}
            />
        </div>
    );
};

export default Question;
