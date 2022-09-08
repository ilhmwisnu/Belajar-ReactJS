import { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./hook";
import { Link } from "react-router-dom";

const HomePage = () => {
  let [num, setNum] = useState(0);
  let {isloading, data, error} = useFetch("http://localhost:8000/blogs")

  let handleClick = (e) => {
    setNum(++num);
  };

  // let handleDelete = (id) => {
  //   let newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  return (
    <div>
      <div className="clickContainer" style={{ padding: "1rem" }}>
        <h4>Clicked : {num} times</h4>
        <div style={{ width: "1rem" }}></div>
        <button className="btn" onClick={(e) => handleClick(e)}>
          Click
        </button>
        <Link to="/create" className="btn" style={{margin : "0 0 0 1rem"}}> Create Blog</Link>
      </div>
      {error && <div style={{textAlign : "center"}} >{error}</div> }
      {isloading  && <h3 style={{textAlign : "center"}}>Loading...</h3> }
      {data && <BlogList blogs={data} title="All Blog" />}
      <br />
    </div>
  );
};

export default HomePage;
