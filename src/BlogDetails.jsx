import { useParams } from "react-router-dom";
import useFetch from "./hook";

const BlogDetail = () => {
  let { id } = useParams();

  let {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div style={{padding : "1rem"}}>
      {isLoading && <p>Loading ... .. . </p>}
      {blog && (
        <div>
          <h1>{blog.blogTitle} </h1>
          <p>Author : {blog.author}</p>
          <br />
          <p className="content"> {blog.content} </p>
        </div>
      )}
      {error && <p>error</p>}

    </div>
  );
};

export default BlogDetail;
