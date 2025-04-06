import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CampusFloPage from './components/CampusFloPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/campusflo" element={<CampusFloPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;