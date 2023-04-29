import { useState } from "react";
import "./App.css";
import LoginPage from "../src/LoginPage";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
// import LogoutPage from '../src/LogoutPage';
import Header from "./Header";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {/* <div>{user ? <LogoutPage/>:<LoginPage/>}</div> */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
