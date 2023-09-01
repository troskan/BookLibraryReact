import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookPage from "./Pages/BookPage";

function App() {
  return (
    <>
      <div>
        <h1>Tjo</h1>
        <a href="/lib">BookLib</a>

        <Router>
          <div className="grid-container">
            <main>
              <Routes>
                <Route path="/lib" element={<BookPage />} />
              </Routes>
            </main>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
