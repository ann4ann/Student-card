import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "../components/textField";
import { validator } from "../utils/validator";

const AddCard = () => {
  const rowStudentData = localStorage.getItem("studentData");
  const studentData = JSON.parse(rowStudentData) || {};
  const [data, setData] = useState({
    firstName: studentData.firstName || "",
    lastName: studentData.lastName || "",
    yearOfBirth: studentData.yearOfBirth || "",
    portfolio: studentData.portfolio || ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    setData((prewState) => ({ ...prewState, [target.name]: target.value }));
  };

  const validatorConfig = {
    firstName: {
      isTooShort: { message: "Имя должно быть не короче 3-х символов" },
      isRequired: { message: "Необходимо указать имя" }
    },
    lastName: {
      isTooShort: { message: "Фамилия должна быть не короче 3-х символов" },
      isRequired: { message: "Необходимо указать фамилию" }
    },
    yearOfBirth: {
      isValidYearOfBirth: { message: "Введите корректный год рождения" },
      isRequired: { message: "Необходимо указать год рождения" }
    },
    portfolio: {
      isSiteAdress: { message: "Укажите корректную ссылку на сайт" },
      isRequired: { message: "Необходимо добавить ссылку на портфолио" }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    // e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    localStorage.setItem("studentData", JSON.stringify(data));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 p-4">
          <h1 className="mb-4">
            {rowStudentData ? "Редактировать" : "Создать"}
          </h1>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Имя"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <TextField
              label="Фамилия"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
            <TextField
              label="Год рождения"
              type="number"
              name="yearOfBirth"
              value={data.yearOfBirth}
              onChange={handleChange}
              error={errors.yearOfBirth}
            />
            <TextField
              label="Портфолио"
              name="portfolio"
              value={data.portfolio}
              onChange={handleChange}
              error={errors.portfolio}
            />
            <div className="d-flex">
              {rowStudentData && (
                <Link
                  to="/"
                  className="btn btn-outline-primary btn-lg w-100 mx-1"
                  role="button"
                >
                  Назад
                </Link>
              )}
              <Link
                className={`btn btn-primary btn-lg w-100 mx-1 ${
                  !isValid ? "disabled" : ""
                }`}
                role="button"
                onClick={handleSubmit}
                to="/"
              >
                {rowStudentData ? "Изменить" : "Добавить"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCard;
