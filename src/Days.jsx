import { useState } from "react";

export const Days = (props) => {
  const [displayAmount, setDisplayAmount] = useState("none");

  const dayData = props.dayData;
  return (
    <div className="day_spend">
      <div
        style={{
          padding: "1px",
          color: "white",
          borderRadius: "5px",
          backgroundColor: "black",
          display: displayAmount,
          textAlign: "center",
          marginBottom: "2px",
          fontSize: "15px",
          width: "53px",
          height: "25px",
        }}
      >
        {"$" + dayData.amount}
      </div>
      <div
        style={{
          borderRadius: "5px",
          height: `${dayData.amount}%`,
          width: "55px",
          backgroundColor:
            props.biggest === dayData.amount ? "#76B5BB" : "#EB765D",
        }}
        onMouseEnter={() => setDisplayAmount("block")}
        onMouseLeave={() => setDisplayAmount("none")}
      ></div>
      <p style={{ fontWeight: "bold" }}>{dayData.day}</p>
    </div>
  );
};
