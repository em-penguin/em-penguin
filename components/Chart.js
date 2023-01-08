import React from "react";

export default function Chart(props) {
    return (
        <li>
            <span>{ props.title }</span>
            <div>{ props.number }</div>
        </li>
    )
}