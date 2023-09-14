import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BookPage from "./Pages/BookPage";
import BookDetails from "./Pages/BookDetails";
import Navbar from "./Pages/Navbar";
import HomePage from "./Pages/HomePage";
import CreateBookPage from "./Pages/CreateBookPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <div className="grid-container">
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/BookLibrary" element={<BookPage />} />
                <Route path="/CreateBook" element={<CreateBookPage />} />
                <Route path="/Details/:id" element={<BookDetails />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
