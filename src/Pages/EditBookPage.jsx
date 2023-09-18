import axios from "axios";
import { useEffect, useState } from "react"; // Added useState import
import { useParams } from "react-router-dom";

const EditBookPage = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationYear: 0,
    description: "",
    isAvailableForLoan: true,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7262/book/${id}`);
        setBook(response.data.result);
      } catch (error) {
        console.error("An error occurred while fetching data: ", error);
      }
    };
    fetchData();
  }, [id]);

  const logBook = () => {
    console.clear();
    console.log(book);
  };
  const clearConsole = () => {
    console.clear();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setBook({ ...book, [name]: Boolean(checked) }); // Explicit conversion to Boolean
    } else {
      setBook({ ...book, [name]: value });
    }
  };

  const submitChanges = (e) => {
    e.preventDefault(); // Prevent default form submission

    // const audio = new Audio("/src/assets/punch-140236.mp3"); // Correct file path
    // audio.play().catch((error) => {
    //   console.error("Audio play failed due to: ", error);
    // });

    try {
      axios.put(`https://localhost:7262/book/${id}`, book);
    } catch (error) {
      console.log("Could not update book.");
    }
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center item border-5">
      <div className="book-form w-50">
        <h1>
          <span className="text-danger fade-in-out">-</span>Edit Book
        </h1>
        <form>
          <label className={`form m-2`} htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
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
            value={book.author}
            onChange={handleChange}
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
            value={book.description}
            onChange={handleChange}
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
            value={book.publicationYear}
            onChange={handleChange}
            placeholder="Year of publiation.."
            className={`form-control m-2`}
            required
          />
          <label className={`form m-2`} htmlFor="genre"></label>
          <select
            className="form-control m-2"
            value={book.genre}
            onChange={handleChange}
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
            checked={book.isAvailableForLoan || false}
            onChange={handleChange}
          />
          <br></br>
          <button onClick={submitChanges} className="btn btn-outline-success">
            Save Book
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

export default EditBookPage;
