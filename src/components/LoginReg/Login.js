import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";
import Header from "../Header/Header";
import HeaderList from "../Header/HeaderList";
import Footer from "../FooterPage/Footer";
import "../style.css";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/home");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center align-items-center bg-white vh-100 login">
        <div className="loginBg p-4 rounded w-25 ">
          <form action="" onSubmit={handleSubmit}>
            <h2 className="text-center">Login</h2>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                onChange={handleInput}
                className="form-control rounded-0"
              ></input>
              {errors.email && (
                <span className="text-danger"> {errors.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={handleInput}
                className="form-control rounded-0"
              ></input>
              {errors.password && (
                <span className="text-danger"> {errors.password}</span>
              )}
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Log in
            </button>
            <p>You are agree to our terms and policies</p>
            <Link
              to="/signup"
              className="btn btn-default border w-100 rounded-0 text-decoration-none bg-light"
            >
              Create Account
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
