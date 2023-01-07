import '../styles/About.module.scss'
import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import {
    mainFv,
} from '../assets'
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
            <main id="about" className="main">
                <div className="main__wrapper">
                    <NavIcon />
                    <div className="main__section">
                        <ImgSlide />
                        <section className="sumary">
                            <Fadein>
                                <div className="sumary__wrapper">
                                    <div className="sumary__right">
                                        <h2 className="sumary__title">sumary</h2>
                                        <p className="sumary__text">
                                            フロントエンドエンジニア4年目です。主にWordPressの保守・改修を行なっています。
                                            2022年の秋に応用情報技術者試験を取得し、現在はReactを勉強しています。
                                        </p>
                                    </div>
                                </div>
                            </Fadein>
                        </section>
                        <section className="experience">
                            <Fadein>
                                <div className="experience__wrapper">
                                    <div className="experience__right">
                                        <h2 className="experience__title">experience</h2>
                                        <p className="experience__text">
                                            フロントエンドエンジニア4年目です。主にWordPressの保守・改修を行なっています。
                                            2022年の秋に応用情報技術者試験を取得し、現在はReactを勉強しています。
                                        </p>
                                    </div>
                                </div>
                            </Fadein>
                        </section>
                        <section className="skills">
                            <Fadein>
                                <div className="skills__wrapper">
                                    <div className="skills__right">
                                        <h2 className="skills__title">skills</h2>
                                        <p className="skills__text">
                                            フロントエンドエンジニア4年目です。主にWordPressの保守・改修を行なっています。
                                            2022年の秋に応用情報技術者試験を取得し、現在はReactを勉強しています。
                                        </p>
                                        <SkillsLogo />
                                    </div>
                                </div>
                            </Fadein>
                        </section>
                        <section className="contact">
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