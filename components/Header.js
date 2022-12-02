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
                        <div class="header__logo-img">
                            <Image
                                alt="logo"
                                src="" />
                        </div>
                        <h1 class="header__logo-text">kojima</h1>
                    </Link>
                </div>
                <NavBar />
                <div class="header__icon">
                    <ul>
                        <li>
                            <Link href="https://twitter.com/_em_penguin">
                                <Image
                                    alt="Twitter"
                                    src="" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://qiita.com/_em_penguin">
                                <Image
                                    alt="Qiita"
                                    src="" />
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/ayaka-kojima-0a9b11258/">
                                <Image
                                    alt="LinkedIn"
                                    src="" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}