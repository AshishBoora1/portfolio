import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Progressbar = () => {
  const percentage = 90;

  return (
    <div style={{ width: 35, height: 35}}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#ffffff",
          trailColor: "transparent",
        })}
      />
    </div>
  );
};

export default Progressbar;
