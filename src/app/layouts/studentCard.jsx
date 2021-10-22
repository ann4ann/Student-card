import React from "react";
import { Link } from "react-router-dom";
import CardItem from "../components/cardItem";

const StudentCard = () => {
  const rowStudentData = localStorage.getItem("studentData");
  const studentData = JSON.parse(rowStudentData);

  return (
    <div className="m-3">
      <h1>Карточка студента</h1>
      {rowStudentData ? (
        <CardItem data={studentData} />
      ) : (
        <>
          <p>Нет данных</p>
          <Link to="/add" className="btn btn-primary" role="button">
            Добавить
          </Link>
        </>
      )}
    </div>
  );
};

export default StudentCard;
