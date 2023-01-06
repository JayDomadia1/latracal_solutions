import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateAttendance from "./components/CreateAttendance";
import Attendance from "./components/Attendance";

function App() {
  let [studentCount, setStudentCount] = useState(0);
  let [time, setTime] = useState([]);
  let [attendance, setAttendance] = useState([]);
  useEffect(() => {
    let d = new Date().toLocaleTimeString();
    setTime((time) => {
      return [...time, d];
    });
    addTime(d);
  }, [studentCount]);

  let addStudentCount = () => {
    setStudentCount(studentCount + 1);
  };
  let addTime = (d) => {
    console.log(time[time.length - 1]);
  };

  let addAttendance = (attendance) => {
    attendance.time = time[time.length - 1];
    setAttendance((prevAttendance) => {
      return [...prevAttendance, attendance];
    });
  };
  return (
    <div className="App">
      <Header />
      <CreateAttendance onAdd={addAttendance} addStudent={addStudentCount} />
      {attendance.map((attendanceItem, index) => {
        return <Attendance key={index} time={attendanceItem.time} name={attendanceItem.name} rollno={attendanceItem.rollno} />;
      })}
      <Footer numberOfStudents={studentCount} />
    </div>
  );
}

export default App;
