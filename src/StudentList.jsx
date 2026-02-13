import React from "react";
import StudentCard from "./StudentCard";
import "./StudentList.css";

const StudentList = () => {
  const students = [
    { id: 1, name: "킴리암", score: 85 },
    { id: 2, name: "운더월", score: 92 },
    { id: 3, name: "타지은", score: 78 },
    { id: 4, name: "고둥지둥", score: 95 },
  ];

  return (
    <div className="student-list-container">
      <h3>학생 명단</h3>
      <div className="student-grid">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            score={student.score}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
