import React from "react";

const StudentCard = ({ name, score }) => {
  return (
    <div className="student-card">
      <p>이름 : {name}</p>
      <p>
        <p style={{ color: score >= 90 ? "#d4af37" : "#333" }}>
          점수 : {score} {score >= 90 && "🏆"}
        </p>
      </p>
    </div>
  );
};

export default StudentCard;
