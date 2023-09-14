import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";

const BookPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost:7262/book");
        console.log(response);

        setBooks(response.data.result);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bookpage-container">
      <h1>Book List</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Book ID</th>
            <th className="col">Title</th>
            <th className="col">Author</th>
            <th className="col">Genre</th>
            <th className="col">Available For Loan</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <th scope="row">{book.bookId}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>
                {book.isAvailableForLoan ? (
                  <>
                    <span
                      className="bg-success text-white p-1 d-inline-block rounded-circle"
                      style={{ width: "10px", height: "10px" }}
                    ></span>
                  </>
                ) : (
                  <>
                    <span
                      className="bg-danger text-white p-1 d-inline-block rounded-circle"
                      style={{ width: "10px", height: "10px" }}
                    ></span>
                  </>
                )}
              </td>
              <td>
                <Link to={`/Details/${book.bookId}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookPage;
