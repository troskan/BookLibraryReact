import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const CreateBookPage = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: 1,
    publicationYear: "",
    description: "",
    isAvailableForLoan: true,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setBook({ ...book, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.post("https://localhost:7262/book", book);
    } catch (error) {
      console.log(error);
      console.log(response.StatusCode);
    }
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
        <form>
          <FormInput
            label="Title"
            name="title"
            value={book.title}
            placeholder="Enter Title"
            onChange={handleOnChange}
          />
          <FormInput
            label="Author"
            name="author"
            value={book.author}
            placeholder="Enter Author name"
            onChange={handleOnChange}
          />
          <FormInput
            label="Description"
            name="description"
            value={book.description}
            placeholder="Enter book description"
            onChange={handleOnChange}
          />
          <FormInput
            label="Year Of Publication"
            name="publicationYear"
            value={book.publicationYear}
            placeholder="Enter year of publication"
            onChange={handleOnChange}
          />
          {/* <select
          className="form-control m-2"
          value={book.genre}
          onChange={handleOnChange}
          name="genre"
          id="genre"
        ></select> */}
          <label htmlFor="isAvailableForLoan">Available For Loan</label>
          <input
            className=""
            type="checkbox"
            name="isAvailableForLoan"
            onChange={handleOnChange}
            value={book.isAvailableForLoan}
          />

          <button onClick={onSubmit} className="btn btn-outline-success">
            Create Book
          </button>
        </form>
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
