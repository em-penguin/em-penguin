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
                            <h1 className="about__title">Kojima Ayaka</h1>
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
                                            <p className="sumary__text">
                                                高校卒業後、デザイナーとして建築関係の会社に入社。サインデザインや、図面の作成をしました。
                                                2年半働いたのち、事務に転職。ExcelVBAやGASを使用し、報酬計算、給与明細作成を行いました。<br />
                                                その後、プログラミングに興味を持ちました。エンジニアを目指し、2020年に株式会社レバレッジに転職。フロントエンドエンジニアとして、自社サービスの保守・改修・新規開発を行なっています。
                                                現在はReactを勉強中です。
                                            </p>
                                            <SkillsLogo />
                                        </div>
                                    </Fadein>
                                </section>
                            </div>
                            <div className="about__column">
                                <section className="experience section">
                                    <Fadein>
                                        <div className="experience__wrapper">
                                            <h2 className="experience__title title">experience</h2>
                                            <ul className="experience__timeline">
                                                <li>
                                                    <p class="experience__timeline-date">2016/03</p>
                                                    <div class="experience__timeline-content">
                                                        <h3>工芸高等学校デザイン科を卒業</h3>
                                                        <p>IllustratorやPhotoshopを3年間使用。V.I.(ビジュアルアイデンティティ)とプロダクトデザインを専攻しました。</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p class="experience__timeline-date">2016/04</p>
                                                    <div class="experience__timeline-content">
                                                        <h3>建築関係のデザイナーとして就職</h3>
                                                        <p>企画デザイン部に配属。建築業界でサインデザインや、図面の作成、建築士と打ち合わせを行いました。</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p class="experience__timeline-date">2018/11</p>
                                                    <div class="experience__timeline-content">
                                                        <h3>スポーツジムの事務職に転職</h3>
                                                        <p>事務として勤怠管理や、報酬計算、給与明細作成を行いました。その際に効率化のため、ExcelVBAやGASを学びました。</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <p class="experience__timeline-date">2020/02</p>
                                                    <div class="experience__timeline-content">
                                                        <h3>自社開発のフロントエンジニアに転職</h3>
                                                        <p>フロントエンドエンジニアとして、自社サービスの保守・改修・新規開発を行なっています。</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Fadein>
                                </section>
                                <section className="skills section">
                                    <Fadein>
                                        <div className="skills__wrapper">
                                            <h2 className="skills__title title">skills</h2>
                                            <div className="skills__language">
                                            </div>
                                            <ul className="skills__qualification">
                                                <li>
                                                    <p className='skills__qualification-date'>2021/12</p>
                                                    <p className='skills__qualification-title'>基本情報技術者試験</p>
                                                </li>
                                                <li>
                                                    <p className='skills__qualification-date'>2022/12</p>
                                                    <p className='skills__qualification-title'>応用情報技術者試験</p>
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