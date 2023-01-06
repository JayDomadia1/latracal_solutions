import React from "react";

export default function Footer(props) {
  return (
    <footer>
      <div className="totalStudents">
        <p>{props.numberOfStudents}</p>
      </div>
    </footer>
  );
}
