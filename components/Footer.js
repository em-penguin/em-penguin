import React from "react";
import NavBar from "./NavBar";
import NavIcon from "./NavIcon";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <NavBar />
                <NavIcon />
            </div>
        </footer>
    )
}