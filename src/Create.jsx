import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

    let [title, setTitle] = useState('')
    let [content, setContent] = useState('')
    let [author, setAuthor] = useState('wisnu')
    let [isLoading, setIsLoading] = useState(false)
    let redirect = useNavigate()


    function handleSubmbit(e){
        e.preventDefault()
        setIsLoading(true)
        let data = { blogTitle : title, content, author}
        // console.log(data)
        fetch("http://localhost:8000/blogs", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : "POST",
            body : JSON.stringify(data)
        }).then(()=>{
            setIsLoading(false)
            console.log("Blog added..")
            redirect("/")
            
        })
    }


    return ( <div className="create">
        <h2>Create Blog</h2>
        <form onSubmit={handleSubmbit} >
            <label htmlFor="title">Title :</label>
            <input type="text" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label htmlFor="content"  >Content :</label>
            <textarea  id="content" onChange={(e)=>setContent(e.target.value)} ></textarea>
            <label htmlFor="author">Author :</label>
            <select  id="author" value={author} onChange={(e)=>setAuthor(e.target.value)} >env
                <option value="ilham">Ilham</option>
                <option value="wisnu">Wisnu</option>
                <option value="perwira">Perwira</option>
                <option value="wardhana">Wardhana</option>
            </select>
            { !isLoading && <button className="btn">Add Blog</button>}
            { isLoading && <button disabled className="btn">Adding blog...</button>}
            <p>{ title }</p>
            <p>{ content }</p>
            <p>{ author }</p>
        </form>
    </div> );
}
 
export default CreateBlog;