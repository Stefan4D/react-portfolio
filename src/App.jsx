import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import NotFound from "./views/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/projects/:id" element={<Projects />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
