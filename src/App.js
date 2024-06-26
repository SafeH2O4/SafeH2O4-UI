import "./App.css";
import Header from "./components/header/FullHeader/Header";
import Main from "./components/MiddlePage/MainPg";
import About from "./components/header/Aboutus/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/header/Product/Product";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SafeH2O4-UI" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/request" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
