import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import Masonry from 'react-masonry-css'
import {
  mainFv,
  blogFv
} from '../assets'
import Header from "../components/Header";
import NavIcon from "../components/NavIcon";
import Footer from "../components/Footer";
import Form from "../components/Form";
import SkillsLogo from "../components/SkillsLogo";
import ImgSlide from "../libs/ImgSlide"
import Fadein from "../libs/Fadein"


export default function Home({ blog, photo }) {
  // 1行に表示するカラム数
  const breakpointColumnsObj = {
    default: 4,
    1180: 3,
    768: 2,
  }

  const blogList = []
  const blogNum = 4

  for (let i = 0; i < blogNum; ++i) {
    console.log(blog[i])
    blogList.push(
      <li li key={ blog[i].id } >
        <Link href={ `/blog/${blog[i].id}` } key={ blog[i].id }>
          <div className="blog__item-title">
            { blog[i].title }
          </div>
          <div className="blog__item-body">
            { blog[i].body }
          </div>
        </Link>
      </li>
    )
  }
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
        <div className="main__wrapper">
          <NavIcon />
          <div className="main__section">
            <ImgSlide />
            <section id="blog" className="blog">
              <div className="blog__wrapper">
                <div className="blog__title">
                  <div className="title__img">
                    <Image
                      alt="blog"
                      src={ blogFv } />
                  </div>
                  <h2 className="title__text">Blog</h2>
                </div>
                <Fadein>
                  <ul className="blog__item">
                    { blogList }
                  </ul>
                </Fadein>
              </div>
            </section>
            <section className="about">
              <Fadein>
                <div className="about__wrapper">
                  <div className="about__left">
                    <Link href="/about/">
                      <Image
                        alt="about"
                        src={ mainFv } />
                    </Link>
                  </div>
                  <div className="about__right">
                    <h2 className="about__title">About</h2>
                    <p className="about__text">
                      フロントエンドエンジニア4年目です。主にWordPressの保守・改修を行なっています。
                      2022年の秋に応用情報技術者試験を取得し、現在はReactを勉強しています。
                    </p>
                    <SkillsLogo />
                  </div>
                </div>
              </Fadein>
            </section>
            <section id="photo" className="photo">
              <div className="photo__wrapper">
                <Masonry
                  breakpointCols={ breakpointColumnsObj }
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  { photo.map((photo) => (
                    <Fadein key={ photo.id }>
                      <Link href={ `/photo/${photo.id}` } key={ photo.id }>
                        <Image src={ photo.img.url } width={ photo.img.width } height={ photo.img.height } key={ photo.id } />
                      </Link>
                    </Fadein>
                  )) }
                </Masonry>
              </div>
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

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const photodata = await client.get({ endpoint: "photo" });
  return {
    props: {
      blog: data.contents,
      photo: photodata.contents
    },
  };
};
