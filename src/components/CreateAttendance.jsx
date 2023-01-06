import React, { useEffect, useState } from "react";

export default function CreateAttendance(props) {
  let [numberOfStudents, setNumberOfStudents] = useState(0);
  let [clicked, setClicked] = useState(false);

  let [studentData, setStudentData] = useState({
    name: "",
    rollno: "",
  });
  let handleChange = (event) => {
    let { name, value } = event.target;
    setStudentData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  let handleClicked = (event) => {
    props.onAdd(studentData);
    setStudentData(() => {
      return {
        name: "",
        rollno: "",
      };
    });
    props.addStudent(numberOfStudents);
  };

  return (
    <form
      onSubmit={(e) => {
        handleClicked();
        e.preventDefault();
      }}
    >
      <div className="container">
        <div className="label">
          Name:
          <input name="name" value={studentData.name} onChange={handleChange} type="text" placeholder="Enter Your Name" required />
        </div>
        <div className="label">
          Roll Number:
          <input name="rollno" value={studentData.rollno} onChange={handleChange} type="number" placeholder="Enter Your Roll Number" required />
        </div>
        <button type="submit">Submit Attendance</button>
      </div>
    </form>
  );
}
