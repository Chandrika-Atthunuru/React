import React from "react";
import { Link } from "react-router-dom";
// nested route
const Restaurant=()=>{
    return(
        <>
        <div>Restaurantdata</div>
        <nav>
            <Link to='/Restaurant/existing'>ExistingRestaurant</Link>
            <Link to='/Restaurant/new'>NewRestaurant</Link>
        </nav>
        </>
    )
}

export default Restaurant