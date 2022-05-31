import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LifeCycle =  () => {
    useEffect(() => {
       console.log('component did mount');
       return () => {
           console.log("component will unmount")
       }
    },[]);

    return(
        <p>Hello</p>
    )
}

const App = () => {
   const [isVisible, setIsVisible] = useState(false);
   const [secondState, setSecondState] = useState(false)
   const handleClick = () => {
       setIsVisible((prev) => {
           return !prev;
       })
   }

   const handleSecondStateClick = () => {
       setSecondState((prev) => {
           return !prev;
       })
   }

   useEffect(() => {
       console.log("component did update")
   },[isVisible, secondState])

    return(
        <>
        <button onClick={handleClick}>Count</button>
        {/* {
            isVisible ? <LifeCycle/> : null
        } */}
        <button onClick={handleSecondStateClick}>Count</button>
        </>
    )
}

export default App;

/* 
1. render
2. component did mount
3. component did update
4. component will unmount
*/