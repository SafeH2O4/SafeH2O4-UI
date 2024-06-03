// import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/header/FullHeader/Header";
import Main from "../src/components/MiddlePage/MainPg";
import About from "./components/header/Aboutus/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/header/Product/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service request" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
