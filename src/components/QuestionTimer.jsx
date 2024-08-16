/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("SET TIMEOUT");
        setTimeout(onTimeout, timeout);
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("SET INTERVAL");
        setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);
    }, []);

    return <progress max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
