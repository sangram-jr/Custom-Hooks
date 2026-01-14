import { useEffect, useState } from "react";

function useFetch(url){
    const [data,setData]=useState({});

  
    useEffect(()=>{
        async function getData() {
            const response=await fetch(url);
            const json=await response.json();
            setData(json);
        }
        getData();
    },[url]); //when the url change , render getData() function


    return(
         data
    )
        
    
}

export default useFetch;