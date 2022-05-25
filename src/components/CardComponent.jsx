import react from "react";
import Card from "./Card";
import { nanoid } from "nanoid";

const CardComponent = () => {
    const array = [
        {
            name : "French Fries",
            image : "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about: "Afgan, Fast Food",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 4.3,
            votes: "45 votes",
            reviews : "78 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Cheese Burger",
            image : "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Chinese,Cheese Burger",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts all payments",
            rating: 5.4,
            votes: "45 votes",
            reviews : "58 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Sandwich",
            image : "https://images.pexels.com/photos/1633495/pexels-photo-1633495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Indian, Sandwich",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 4.4,
            votes: "65 votes",
            reviews : "79 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Panner Pizza",
            image : "https://images.pexels.com/photos/5056863/pexels-photo-5056863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Panner Pizza, Burger",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts all payments",
            rating: 4.2,
            votes: "77 votes",
            reviews : "99 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Sliced Pepperoni Pizza",
            image : "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Pizza, Burger",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 3.3,
            votes: "40 votes",
            reviews : "78 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Pasta",
            image : "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Indian Mix Sauce Pasta",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 1.3,
            votes: "50 votes",
            reviews : "87 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Noodles",
            image : "https://images.pexels.com/photos/116738/pexels-photo-116738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "French Noodles",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts all payments",
            rating: 2.3,
            votes: "59 votes",
            reviews : "89 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Cooked Squid",
            image : "https://images.pexels.com/photos/2433979/pexels-photo-2433979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Chinese, Fast Food",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts cash only",
            rating: 5.3,
            votes: "79 votes",
            reviews : "97 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Cooked Ramen",
            image : "https://images.pexels.com/photos/1907244/pexels-photo-1907244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about: "Afgan, Fast Food",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts all payments",
            rating: 4.5,
            votes: "70 votes",
            reviews : "80 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "White Ceramic Plate",
            image : "https://images.pexels.com/photos/19642/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about: "Afgan, Fast Food",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 1.5,
            votes: "50 votes",
            reviews : "90 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Cup Cake",
            image : "https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Delicious Desert, India",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 2.5,
            votes: "95 votes",
            reviews : "88 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Spring Rolls",
            image : "https://images.pexels.com/photos/4105288/pexels-photo-4105288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Spring Rolls, Italian",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts all payments",
            rating: 3.5,
            votes: "25 votes",
            reviews : "28 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Choclate Ice Cream",
            image : "https://images.pexels.com/photos/2819088/pexels-photo-2819088.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Delicious Desert, India",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 5.5,
            votes: "85 votes",
            reviews : "88 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Delicious Desert",
            image : "https://images.pexels.com/photos/6025810/pexels-photo-6025810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "French, Desert",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 3.2,
            votes: "95 votes",
            reviews : "98 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Momos",
            image : "https://images.pexels.com/photos/7918232/pexels-photo-7918232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            about : "Chinese, Fast Food",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts all payments",
            rating: 2.2,
            votes: "45 votes",
            reviews : "68 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Bread With Soup",
            image : "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Indian, Soup",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts all payments",
            rating: 2.1,
            votes: "44 votes",
            reviews : "22 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Sweetcorn Pasta",
            image : "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Indian, Sweetcorn Pasta",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 2.4,
            votes: "45 votes",
            reviews : "75 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Cold Coffee",
            image : "https://images.pexels.com/photos/5946973/pexels-photo-5946973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            about : "Beverages, Desert",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts online payments",
            rating: 5.1,
            votes: "65 votes",
            reviews : "70 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Burrito",
            image : "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Pizza, Burger",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts all payments",
            rating: 5.2,
            votes: "45 votes",
            reviews : "30 reviews",
            order: "Order Online",
            id : nanoid(4)
        },
        {
            name : "Choclate Cake",
            image : "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            about : "Italian, Desert",
            cost: "Cost ₹600 for one",
            min : "Min ₹200",
            payment: "Accepts Cash only",
            rating: 5.3,
            votes: "55 votes",
            reviews : "88 reviews",
            order: "Order Online",
            id : nanoid(4)
        }
    ];

    let foodArray = JSON.stringify(array);

    localStorage.setItem("myArray", foodArray);

    let myArray = localStorage.getItem("myArray");

    myArray = JSON.parse(myArray);
    console.log(myArray);

    return(
        <>
        <h1>Resturant App</h1>
        <Card array={array}/>
        </>
    )
}



export default CardComponent;