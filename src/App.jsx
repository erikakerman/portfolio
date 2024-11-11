import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Blogs from "./components/sections/Blogs";
import Projects from "./components/sections/Projects";
import ProjectDetail from "./components/sections/ProjectDetail";
import { projects } from "./data/projects"; // Import projects data

function App() {
  return (
    <Router>
      <div className="App bg-white text-black">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <About />
                <Projects projects={projects} />
                <Blogs />
              </main>
            }
          />
          <Route
            path="/project/:id"
            element={<ProjectDetail projects={projects} />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
