import React from "react";
import { Link } from "react-router-dom";
import AddCard from "./addCard";

const StudentCard = () => {
  const hadCard = false;
  return (
    <div className="m-3">
      <h1>Карточка студента</h1>
      {hadCard ? (
        <AddCard />
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
