
import React from "react";
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Pages
import DetailPage from "./pages/detail/DetailPages";
import ProfilePage from "./pages/Profile/ProfilePage.js"
import LandingPage from "./pages/LandingPage";

// Components
import { HiHome } from 'react-icons/hi';
import { MdGroup } from 'react-icons/md';



// Components
import Header from "./components/header";


import "./App.css";
import DetailPages from "./pages/detail/DetailPages";


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/profile" element={<ProfilePage />} />
          <Route exact path="/detail/:id" element={<DetailPages />} />
        </Routes>
        <footer>
          <NavLink to="/" className="iconWrapper">
            <HiHome className="icon" /> Home
          </NavLink>
          <NavLink to="/profile" className="iconWrapper">
            <MdGroup className="icon" /> Profile
          </NavLink>
        </footer>
      </Router>
    </div>
  );
}


export default App;
           
