/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log("SET TIMEOUT");
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        console.log("SET INTERVAL");
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
