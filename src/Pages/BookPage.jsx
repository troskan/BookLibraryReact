import axios from "axios";
import React, { useState, useEffect } from "react";

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
    <div>
      <h1>Book List</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Book ID</th>
            <th className="col">Title</th>
            <th className="col">Author</th>
            <th className="col">Available For Loan</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <th scope="row">{book.bookId}</th>

              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.isAvailableForLoan ? "Yes" : "No"}</td>
              <td>View Edit Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookPage;
