import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <Link href="/">
                        <h1 className="header__logo-text">kojima</h1>
                    </Link>
                </div>
                <NavBar />
            </div>
        </header>
    )
}