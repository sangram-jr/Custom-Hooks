import { useEffect } from "react";
import { useRef } from "react";


const usePrev=(count)=>{
    const ref=useRef();

    useEffect(()=>{
        ref.current=count;
    },[count])

    return ref.current;  //react first return karta hai then Effect ko run(render) karta hai
}
export default usePrev;