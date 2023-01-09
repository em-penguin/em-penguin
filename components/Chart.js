import React from "react";
import styled from 'styled-components';

export default function Chart(props) {
    const ChartBarColor = styled.span`
    width:${props.number}%;
    `
    return (
        <li className="chart">
            <p className="chart__title">{ props.title }</p>
            <div className="chart__bar">
                <ChartBarColor className="chart__bar-color"></ChartBarColor>
            </div>
        </li>
    )
}