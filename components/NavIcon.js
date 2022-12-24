import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    logosMail
} from '../assets'

export default function NavIcon() {
    return (
        <div className="nav-icon">
            <ul>
                <li>
                    <Link href="https://twitter.com/_em_penguin">
                        <Image
                            alt="Twitter"
                            src={ logosMail } />
                    </Link>
                </li>
                <li>
                    <Link href="https://qiita.com/_em_penguin">
                        <Image
                            alt="Qiita"
                            src={ logosMail } />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/ayaka-kojima-0a9b11258/">
                        <Image
                            alt="LinkedIn"
                            src={ logosMail } />
                    </Link>
                </li>
            </ul>
        </div>
    )
}