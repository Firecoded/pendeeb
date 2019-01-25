import React from "react";
import { Link } from 'react-router-dom';
import "./404.css";


export default props => (
    <div className = "not-found-container">
        <div className = "not-found-body">
            <h1>404 Page Not Found</h1>
            <Link className = "btn" to = "/"> Return Home </Link>
        </div>
    </div>
)
