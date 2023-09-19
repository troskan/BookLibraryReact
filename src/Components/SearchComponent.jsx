import axios from "axios";
import { useState } from "react";

const SearchComponent = ({ setBooks }) => {
  const [searchString, setSearchString] = useState("");
  const [error, setError] = useState("");
  const fetchData = async (searchString) => {
    try {
      if (searchString === "") {
        const response = await axios.get("https://localhost:7262/book");
        setBooks(response.data.result);
        setError("");
      }
      const response = await axios.get(
        `https://localhost:7262/search?searchString=${searchString}`
      );

      setBooks(response.data.result);
      setError("");
    } catch (error) {
      setError(`${error.message}`);
      console.log("Could not get books from search: " + error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission which reloads the page
    fetchData(searchString);
  };
  const onChange = (e) => {
    setSearchString(e.target.value);
    console.log(searchString);
  };
  const onSubmit = (e) => {
    fetchData(searchString);
  };
  const onReset = (e) => {
    setSearchString("");
    fetchData("");
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className="input-group mb-3 w-75">
        <input
          type="text"
          className="form-control search"
          onChange={onChange}
          value={searchString}
          placeholder="Search for any book"
          aria-label="Search for any book"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button onClick={onSubmit} className="btn btn-success" type="button">
            Search
          </button>
          <button onClick={onReset} className="btn btn-primary" type="button">
            Reset
          </button>
        </div>
      </form>
      {error !== "" && <h3>For Developer: {error}</h3>}
    </>
  );
};

export default SearchComponent;
