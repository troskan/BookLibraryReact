import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookPage from "./Pages/BookPage";
import BookDetails from "./Pages/BookDetails";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div>
        <a href="/lib">BookLib</a>

        <Router>
          <div className="grid-container">
            <main>
              <Routes>
                <Route path="/lib" element={<BookPage />} />
                <Route path="/Details/:id" element={<BookDetails />} />
              </Routes>
            </main>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
