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
      <ul>
        {books.map((book) => (
          <li key={book.book}>
            {" "}
            {/* Changed from books.id to book.id */}
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookPage;
