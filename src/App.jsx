import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Teams from "./pages/teams/Teams";
import Blogs from "./pages/blogs/Blogs";
import Career from "./pages/career/Career";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Layout from "./components/layout/Layout";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
                <Routes>
                    <Route path="" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/teams" element={<Teams />} />
                        {/* <Route path="/blogs" element={<Blogs />} /> */}
                        <Route path="/career" element={<Career />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Route>
                </Routes>
            </Router>
    </>
  );
};

export default App;
