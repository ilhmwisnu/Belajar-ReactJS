import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const BlogList = ({ blogs, title, func }) => {
    let redirect = useNavigate();

    function handleDelete(id) {
        console.log("Berhasil menghapus");
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE",
        }).then(() => {
          redirect("/delete")
          // redirect("/")
        });
    }

    return (
        <div>
            <h2 style={{ margin: " 1rem 2rem" }}>{title}</h2>
            {blogs.map((blog) => (
                <div className="blogContainer" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h3>{blog.blogTitle}</h3>
                        <p>Author : {blog.author}</p>
                    </Link>
                    <FaTrash
                        className="delete"
                        onClick={() => {
                            handleDelete(blog.id);
                            // func()
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default BlogList;
