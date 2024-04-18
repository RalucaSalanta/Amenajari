import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} key="home"></Route>
        <Route path="/about" element={<About />} key="about"></Route>
        <Route path="/service" element={<Service />} key="service"></Route>
        <Route path="/contact" element={<Contact />} key="contact"></Route>
      </Routes>
    </div>
  );
}
