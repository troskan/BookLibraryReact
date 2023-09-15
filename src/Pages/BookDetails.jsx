import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookDetails() {
  const [book, setBook] = useState({});
  const [bookToDelete, setBookToDelete] = useState({});
  const { id } = useParams();
  console.log("ID from useParams:", id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("ID from useParams:", id);
        const response = await axios.get(`https://localhost:7262/book/${id}`);
        setBook(response.data.result);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };
    fetchData();
  }, [id]);
  //B114

  const deleteBook = async (e) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      // Confirm box
      try {
        const response = await axios.delete(
          `https://localhost:7262/book/${id}`
        );
        setBookToDelete(response.data.result);
        window.alert("Book successfully deleted."); // Alert after successful deletion
      } catch (error) {
        console.error("An error occurred while trying to delete book: ", error);
        window.alert("Failed to delete the book."); // Alert on error
      }
    }
  };

  return (
    <div>
      <div className="bookpage-container">
        <h2>Book details</h2>

        <ul className="list-group">
          <li className="list-group-item">
            <span className="bold">Title:</span> {book.title}
          </li>
          <li className="list-group-item">
            <span className="bold">Author:</span> {book.author}
          </li>
          <li className="list-group-item">
            <span className="bold">Genre:</span> {book.genre}
          </li>
          <li className="list-group-item">
            <span className="bold">Year of publication:</span>{" "}
            {book.publicationYear}
          </li>
          <li className="list-group-item">
            <span className="bold">Description:</span> {book.description}
          </li>
          <li className="list-group-item">
            <span className="bold">Available For Loan:</span>
            {book.isAvailableForLoan ? (
              <>
                <span>Yes</span>
                <span
                  className="bg-success text-white p-1 d-inline-block rounded-circle"
                  style={{ width: "10px", height: "10px" }}
                ></span>
              </>
            ) : (
              <>
                <span>No</span>
                <span
                  className="bg-danger text-white p-1 d-inline-block rounded-circle"
                  style={{ width: "10px", height: "10px" }}
                ></span>
              </>
            )}
          </li>
        </ul>
        <a href={`/edit/${book.bookId}`} className="btn btn-success">
          Edit
        </a>
        <a
          onClick={deleteBook}
          href={`/delete/${book.bookId}`}
          className="btn btn-danger"
        >
          Delete
        </a>
      </div>
    </div>
  );
}

export default BookDetails;
