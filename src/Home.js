import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <h2>Fresh Pizza Delivered!</h2>
            <button>
                <Link to="/pizza">Place Your Order Now!</Link>
            </button>
        </div>
    );
};

export default Home;