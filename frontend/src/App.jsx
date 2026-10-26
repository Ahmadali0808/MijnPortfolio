import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>

      <footer>
        <p>© {new Date().getFullYear()} Ahmad</p>
      </footer>
    </>
  );
}

export default App;
