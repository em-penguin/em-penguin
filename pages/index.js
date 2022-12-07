import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import {
  fv,
  blogFv
} from '../assets'
import Header from "../components/Header";
import NavIcon from "../components/NavIcon";
import Footer from "../components/Footer";
import Form from "../components/Form";

export default function Home({ blog, photo }) {
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
            <div className="fv">
              <Image
                alt="fv"
                src={ fv } />
            </div>
            <section className="blog">
              <div className="blog__wrapper">
                <div className="blog__title">
                  <div className="title__img">
                    <Image
                      alt="blog"
                      src={ blogFv } />
                  </div>
                  <h2 className="title__text">Blog</h2>
                </div>
                <ul className="blog__item">
                  { blog.map((blog) => (
                    <li key={ blog.id }>
                      <Link href={ `/blog/${blog.id}` }>
                        { blog.title }
                      </Link>
                    </li>
                  )) }
                </ul>
              </div>
            </section>
            <section className="photo">
              <div className="photo__wrapper">
                <ul className="photo__item">
                  { photo.map((photo) => (
                    <li key={ photo.id }>
                      <Link href={ `/photo/${photo.id}` }>
                        { photo.title }
                      </Link>
                    </li>
                  )) }
                </ul>
              </div>
            </section>
            <section className="about">
              <div className="about__wrapper">
                <div className="about__left">
                  <Image
                    alt="about"
                    src={ fv } />
                </div>
                <div className="about__right">
                  <h2 className="about__title">About</h2>
                  <p className="about__text">
                    これは段落です。「テキストを編集」をクリックするか、ここをダブルクリックしてテキストを追加・編集してください。ドロップでページ内のどこにでも自由に移動させることができます。
                  </p>
                </div>
              </div>
            </section>
            <section className="contact">
              <div className="contact__wrapper">
                <div className="contact__left">
                </div>
                <div className="contact__right">
                  <Form />
                </div>
              </div>
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
