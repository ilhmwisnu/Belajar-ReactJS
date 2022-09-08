import { useEffect, useState } from "react";

const useFetch = (url) => {

 
    let [error, setError] = useState('');
    let [isloading, setIsLoading] = useState(true);
    let [data, setData] = useState(null);

    useEffect(() => {

        let abortCont = new AbortController()
        setTimeout(()=>{
          fetch(url).then((res) => {
          if (!res.ok) {
            throw Error(res.status + " - " +  res.statusText)
          }
    
          return res.json().then(
            (datas)=>{
              setIsLoading(false)
              setData(datas)
            }
          )
        }).catch(
        (e)=>{
          if (!e.name === "AbortError") {
            setIsLoading(false)
            setError(e.message)
          }
          // console.log(e)
        }
        )
        }, 100)

        return abortCont.abort()
      }, [url]);
      
    return {data, isloading, error} ;
}
 
export default useFetch;