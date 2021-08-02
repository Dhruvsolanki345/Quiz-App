import { useState, useEffect } from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

function Timer({ setIsSubmit, timeInMinutes }) {
  const [percent, setPercent] = useState(1);
  const [status, setStatus] = useState("success");

  useEffect(() => {}, []);

  useEffect(() => {
    let percentString = localStorage.getItem("percent");
    let per = percentString ? parseInt(percentString) : 1;
    setPercent(per);
    if (per > 95) setStatus("error");
    let n = (timeInMinutes * 60 * 1000) / 100;
    let time = setInterval(() => {
      per += 1;
      setPercent(per);
      localStorage.setItem("percent", per);
      if (per > 95) setStatus("error");
      if (per === 101) {
        localStorage.removeItem("percent");
        setIsSubmit(true);
        clearInterval(time);
      }
    }, n);
  }, []);

  return (
    <div style={{ color: "white" }} className="timer">
      <Progress
        percent={percent}
        theme={{
          error: {
            symbol: "\u231b",
            trailColor: "pink",
            color: "red",
          },
          success: {
            symbol: "\u23F3",
            trailColor: "lightgreen",
            color: "rgb(9, 129, 9)",
          },
        }}
        status={status}
      />
    </div>
  );
}

export default Timer;
