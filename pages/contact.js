import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import NavIcon from "../components/NavIcon";
import Footer from "../components/Footer";
import Form from "../components/Form";
import SkillsLogo from "../components/SkillsLogo";
import ImgSlide from "../libs/ImgSlide"
import Fadein from "../libs/Fadein"


export default function About({ }) {
    return (
        <div className="body__wrapper">
            <Head>
                <title>kojima</title>
                <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills." />
                <meta name="author" content="kojima" />
                <meta name="keywords" content="kojima, ayaka, Portfolio, Frontend" />
                <meta property="og:image" content="" key="ogimage" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            </Head>
            <Header />
            <main className="main">
                <div id="contact" className="main__wrapper">
                    <NavIcon />
                    <div className="main__section">
                        <ImgSlide />
                        <section id="contact" className="contact">
                            <Fadein>
                                <div className="contact__wrapper">
                                    <div className="contact__left">
                                        <h2 className="contact__title">Contact</h2>
                                        <p className="contact__text">
                                            これは段落です。「テキストを編集」をクリックするか、ここをダブルクリックしてテキストを追加・編集してください。ドロップでページ内のどこにでも自由に移動させることができます。
                                        </p>
                                    </div>
                                    <div className="contact__right">
                                        <Form />
                                    </div>
                                </div>
                            </Fadein>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div >
    );
}