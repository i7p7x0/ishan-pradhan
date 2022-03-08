import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//CUSTOM COMPONENTS
import Home from "../pages/home/page/Home";
//STYLE
import "../app/style/app.css";
import Header from "../layout/header/Header";
import About from "../pages/about/page/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/resume" exact element={<About />} />
          <Route path="/resume" exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
