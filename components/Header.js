import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
    return (
        <header class="header">
            <div class="header__wrapper">
                <div class="header__logo">
                    <Link href="/">
                        <h1 class="header__logo-text">kojima</h1>
                    </Link>
                </div>
                <NavBar />
            </div>
        </header>
    )
}