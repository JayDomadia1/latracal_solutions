import React from "react";

export default function Attendance(props) {
  return (
    <div className="container">
      <div className="note">
        <h1>{props.name}</h1>
        <p>{props.rollno}</p>
        <p className="time">{props.time}</p>
      </div>
    </div>
  );
}
