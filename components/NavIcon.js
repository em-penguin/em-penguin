import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavIcon() {
    return (
        <div class="nav-icon">
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
    )
}