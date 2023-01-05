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
import ImgSlide from "../libs/ImgSlide"
import Fadein from "../libs/Fadein"


export default function Home({ blog, photo }) {
  // 1行に表示するカラム数
  const breakpointColumnsObj = {
    default: 4,
    1180: 3,
    768: 2,
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
                    { blog.map((blog) => (
                      <li key={ blog.id }>
                        <Link href={ `/blog/${blog.id}` } key={ blog.id }>
                          { blog.title }
                        </Link>
                      </li>
                    )) }
                  </ul>
                </Fadein>
              </div>
            </section>
            <section id="about" className="about">
              <Fadein>
                <div className="about__wrapper">
                  <div className="about__left">
                    <Image
                      alt="about"
                      src={ mainFv } />
                  </div>
                  <div className="about__right">
                    <h2 className="about__title">About</h2>
                    <p className="about__text">
                      これは段落です。「テキストを編集」をクリックするか、ここをダブルクリックしてテキストを追加・編集してください。ドロップでページ内のどこにでも自由に移動させることができます。
                    </p>
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
