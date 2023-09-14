import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const CreateBookPage = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationYear: "",
    description: "",
    isAvailableForLoan: true,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setBook({ ...book, [name]: value });
  };
  const logBook = () => {
    console.clear();
    console.log(book);
  };
  const clearConsole = () => {
    console.clear();
  };
  const FormInput = ({
    label,
    name,
    value,
    placeholder,
    onChange,
    additionalClass,
  }) => {
    return (
      <>
        <label className={`form m-2 ${additionalClass}`} htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={`form-control m-2 ${additionalClass}`}
          required
        />
      </>
    );
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center item border-5">
      <div className="book-form w-50">
        <h1>
          <span className="text-success fade-in-out">+</span>Create Book
        </h1>
        <FormInput
          label="Title"
          name="title"
          value={book.title}
          placeholder="Enter Title"
          onChange={handleOnChange}
        />
        <button onClick={logBook} className="btn btn-success m-2">
          Log Current Book
        </button>
        <button onClick={clearConsole} className="btn btn-success m-2">
          Clear Console
        </button>
      </div>
    </div>
  );
};

export default CreateBookPage;
