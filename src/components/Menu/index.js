import React from "react";
import { Link } from "gatsby";

const Menu = ({ items }) => {
    return (
        <ul>
         { items.map((item) => (
            <Link to={item.link} activeClassName="active">
            <li key={item.id}>{item.name}</li>
            </Link>
         ))}
        </ul>
    )
}

export default Menu