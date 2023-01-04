import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    logosMail,
    logosTwitter,
    logosCompass,
    logosGithub
} from '../assets'

export default function NavIcon() {
    return (
        <div className="nav-icon">
            <ul>
                <li>
                    <Link href="https://twitter.com/_em_penguin" target="_blank" rel="noopener noreferrer">
                        <Image
                            alt="Twitter"
                            src={ logosTwitter } />
                    </Link>
                </li>
                <li>
                    <Link href="https://connpass.com/user/_em_penguin/" target="_blank" rel="noopener noreferrer">
                        <Image
                            alt="connpass"
                            src={ logosCompass } />
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/em-penguin" target="_blank" rel="noopener noreferrer">
                        <Image
                            alt="GitHub"
                            src={ logosGithub } />
                    </Link>
                </li>
                <li>
                    <Link href="mailto:pm10.45.mono@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Image
                            alt="Mail"
                            src={ logosMail } />
                    </Link>
                </li>
            </ul>
        </div>
    )
}