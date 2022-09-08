// import './App.css';
import NavBar from "./Navbar";
import HomePage from "./HomePage";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import BlogDetail from "./BlogDetails";
import CreateBlog from "./Create";
import Delete from "./delete";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/blogs/:id" element={<BlogDetail></BlogDetail>}/>
          <Route path="/create" element={<CreateBlog></CreateBlog>}/>
          <Route path="/delete" element={<Delete></Delete>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
