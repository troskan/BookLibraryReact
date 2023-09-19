import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CreateBookPage = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "Classic",
    publicationYear: 1955,
    description: "",
    isAvailableForLoan: true,
  });
  let navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setBook({ ...book, [name]: Boolean(checked) }); // Explicit conversion to Boolean
    } else {
      setBook({ ...book, [name]: value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Payload being sent to server: ", book); // Debugging line
      const response = await axios.post("https://localhost:7262/book", book);
      console.log(response.data);
      navigate("/BookLibrary");
    } catch (error) {
      console.log(error);
      if (error.response) {
        console.log("Server responded with a status:", error.response.status);
        console.log("Response data:", error.response.data);
      } else {
        console.log("The request was made but no response was received");
      }
    }
  };
  const logBook = () => {
    console.clear();
    console.log(book);
  };
  const clearConsole = () => {
    console.clear();
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center item border-5">
      <div className="book-form w-50">
        <h1>
          <span className="text-success fade-in-out">+</span>Create Book
        </h1>
        <form>
          <label className={`form m-2`} htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            onChange={handleOnChange}
            value={book.title}
            placeholder="Enter book title"
            className={`form-control m-2`}
            required
          />
          <label className={`form m-2`} htmlFor="author">
            Author
          </label>
          <input
            type="text"
            name="author"
            onChange={handleOnChange}
            value={book.author}
            placeholder="Enter name of author"
            className={`form-control m-2`}
            required
          />
          <label className={`form m-2`} htmlFor="description">
            Description
          </label>
          <input
            type="text"
            name="description"
            onChange={handleOnChange}
            value={book.description}
            placeholder="Book description.."
            className={`form-control m-2`}
            required
          />
          <label className={`form m-2`} htmlFor="publicationYear">
            Year of publication
          </label>
          <input
            type="number"
            name="publicationYear"
            onChange={handleOnChange}
            value={book.publicationYear}
            placeholder="Year of publiation.."
            className={`form-control m-2`}
            required
          />
          <label className={`form m-2`} htmlFor="genre">
            Genre
          </label>
          <label className={`form m-2`} htmlFor="genre"></label>
          <select
            className="form-control m-2"
            value={book.genre}
            onChange={handleOnChange}
            name="genre"
            id="genre"
          >
            <option value="Classic">Classic</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Science Fiction">Science Fiction</option>
          </select>
          <label htmlFor="isAvailableForLoan">Available For Loan</label>
          <input
            className=""
            type="checkbox"
            name="isAvailableForLoan"
            onChange={handleOnChange}
            checked={book.isAvailableForLoan} // Notice the use of 'checked' here instead of 'value'
          />
          <br />
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
