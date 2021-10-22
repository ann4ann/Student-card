import React from "react";
import PropTypes from "prop-types";
import { ageEnding } from "../utils/ageEnding";
import { Link } from "react-router-dom";

const CardItem = ({ data }) => {
  const ages = new Date().getFullYear() - data.yearOfBirth;
  const agesString = `${ages} ${ageEnding(ages)}`;
  console.log(data);
  return (
    <div className="m-3">
      <h1 className="pt-3">{`${data.firstName} ${data.lastName}`}</h1>
      <p>Возраст: {agesString}</p>
      <p>
        Портфолио:{" "}
        <a href={data.portfolio} target="_blank" rel="noopener noreferrer">
          {data.portfolio}
        </a>
      </p>
      <Link to="/add" className="btn btn-primary mt-3" role="button">
        Редактировать
      </Link>
    </div>
  );
};

CardItem.propTypes = {
  data: PropTypes.object
};

export default CardItem;
