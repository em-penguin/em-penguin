import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import {
    mainFv,
    aboutFv
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
                        <div className='about'>
                            <div className="about__column">
                                <div className="about__img section">
                                    <Image
                                        alt="fv"
                                        src={ aboutFv } />
                                </div>
                                <section className="sumary section">
                                    <Fadein>
                                        <div className="sumary__wrapper">
                                            <h2 className="sumary__title title">sumary</h2>
                                            <p className="sumary__text text">
                                                高校卒業後、デザイナーとして建築関係の会社に入社。サインデザインや、図面の作成をしました。
                                                その後、スポーツジムの会社に転職。事務として報酬計算、給与明細作成を行いました。その際に効率化のため、ExcelVBAやGASを使用。<br />
                                                ExcelVBAやGASをを通してプログラミングに興味を持ちました。エンジニアを目指し、2020年に株式会社レバレッジに転職。フロントエンドエンジニアとして、自社サービスの保守・改修・新規開発を行なっています。
                                                現在はReactを勉強中です。
                                            </p>
                                            <SkillsLogo />
                                        </div>
                                    </Fadein>
                                </section>
                            </div>
                            <div className="about__column">
                                <section className="skills section">
                                    <Fadein>
                                        <div className="skills__wrapper">
                                            <h2 className="skills__title title">skills</h2>
                                            <p className="skills__text text">
                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                            </p>
                                        </div>
                                    </Fadein>
                                </section>
                                <section className="experience section">
                                    <Fadein>
                                        <div className="experience__wrapper">
                                            <h2 className="experience__title title">experience</h2>
                                            <ul className="experience__timeline">
                                                <li>
                                                    <p class="experience__timeline-date">2016/03</p>
                                                    <div class="experience__timeline-content">
                                                        <h3>工芸高等学校デザイン科を卒業</h3>
                                                        <p>ワーホリビザで渡加。アクセサリーショップ等でバイト。カナダ生活を満喫。</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p class="experience__timeline-date">2016/04</p>
                                                    <div class="experience__timeline-content">
                                                        <h3>建築関係のデザイナーとして就職</h3>
                                                        <p>ワーホリビザで渡加。アクセサリーショップ等でバイト。カナダ生活を満喫。</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p class="experience__timeline-date">2018/11</p>
                                                    <div class="experience__timeline-content">
                                                        <h3>スポーツジムの事務職に転職</h3>
                                                        <p>ワーホリビザで渡加。アクセサリーショップ等でバイト。カナダ生活を満喫。</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p class="experience__timeline-date">2020/02</p>
                                                    <div class="experience__timeline-content">
                                                        <h3>自社開発のフロントエンジニアに転職</h3>
                                                        <p>ワーホリビザで渡加。アクセサリーショップ等でバイト。カナダ生活を満喫。</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Fadein>
                                </section>
                            </div>
                        </div>
                        <section className="contact">
                            <Fadein>
                                <div className="contact__wrapper">
                                    <div className="contact__left">
                                        <h2 className="contact__title">Contact</h2>
                                    </div>
                                    <div className="contact__right">
                                        <Form />
                                    </div>
                                </div>
                            </Fadein>
                        </section>
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    );
}