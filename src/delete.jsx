import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Delete = () => {
    let redirect  = useNavigate()

    useEffect(()=>{
        redirect("/")
    },[])

    return ( <div></div> );
}
 
export default Delete;