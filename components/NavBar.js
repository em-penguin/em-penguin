import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="header__nav">
            <ul>
                <li>
                    <Link href="">about</Link>
                </li>
                <li>
                    <Link href="">blog</Link>
                </li>
                <li>
                    <Link href="">photo</Link>
                </li>
                <li>
                    <Link href="">contact</Link>
                </li>
            </ul>
        </nav>
    )
}