import React from "react";
import Link from "next/link";

export default function NavBar() {

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/about/">about</Link>
                </li>
                <li>
                    <Link href="#blog">blog</Link>
                </li>
                <li>
                    <Link href="#photo">photo</Link>
                </li>
                <li>
                    <Link href="#contact">contact</Link>
                </li>
            </ul>
        </nav>
    )
}