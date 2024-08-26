/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import quizCompleted from "../assets/trophyImage.png";
import QUESTIONS from "../Questions.js";

const Summary = ({ userAnswers }) => {
    const skippedAnswers = userAnswers.filter((answer) => answer === null);
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    );
    const skippedAnswerShare = Math.round(
        (skippedAnswers.length / userAnswers.length) * 100
    );
    const correctAnswerShare = Math.round(
        (correctAnswers.length / userAnswers.length) * 100
    );
    const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

    return (
        <div className="max-w-[900px] max-lg:max-w-[700px] bg-yellow-200 mx-auto flex flex-col justify-center items-center p-16 rounded-xl shadow-2xl mb-16 border border-black">
            <h1 className="text-6xl font-bold my-8 font-montserrat text-blue-600">
                Quiz Complete!
            </h1>
            <img
                src={quizCompleted}
                alt="trophy image"
                width={250}
                height={250}
            />

            <div className="my-12 flex justify-between text-center gap-12 font-medium font-montserrat text-blue-600 text-4xl border-b-[3px] border-slate-800 pb-12">
                <p className="flex-1 text-slate-700">
                    <span>{skippedAnswerShare}%</span>
                    <span> Skipped question</span>
                </p>
                <p className="flex-1 text-green-500">
                    <span className="block">{correctAnswerShare}%</span>
                    <span> Answered correctly</span>
                </p>
                <p className="flex-1 text-red-400">
                    <span>{wrongAnswerShare}%</span>
                    <span> Answered incorrectly</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = "";
                    if (answer === null) {
                        cssClass += "skippedAnswer";
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += "correctAnswer";
                    } else {
                        cssClass += "wrongAnswer";
                    }

                    return (
                        <li key={answer} className="text-center text-2xl">
                            <h3 className="w-16 h-16 bg-blue-400 mx-auto flex justify-center items-center rounded-full font-bold shadow-xl">
                                {index + 1}
                            </h3>
                            <p className="text-2xl font-medium font-montserrat mt-2 text-slate-700">
                                {QUESTIONS[index].text}
                            </p>
                            <p className={cssClass}>{answer ?? "Skipped"}</p>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Summary;
