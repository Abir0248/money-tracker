import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; // Note the change here: Switch is replaced with Routes
import Income from "./Income";
import Expenses from "./Expenses";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Money Tracker
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/income">
                    Income
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/expenses">
                    Expenses
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
