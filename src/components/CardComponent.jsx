import React from "react";
import { useState } from "react";
import Card from "./Card";
import data from './data.json';

const CardComponent = () => {
    const [resturantData, setResturantData] = useState(data);
    
    const handelClicked = (event) => {
        const filteredData = data.filter((e) => e.rating >= event.target.dataset.value)
        setResturantData(filteredData);
    }
    return(
        <>
        <h1>Resturant App</h1>
        <button onClick={handelClicked} data-value={4}>Greater than 4</button>
        <button onClick={handelClicked} data-value={3}>Greater than 3</button>
        <button onClick={handelClicked}  data-value={2}>Greater than 2</button>
        <button onClick={handelClicked}  data-value={1}>Greater than 1</button>
        <Card data={resturantData}/>
        </>
    )
}



export default CardComponent;