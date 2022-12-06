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


export default function Home({ blog, photo }) {
  return (
    <div class="body__wrapper">
      <Head>
        <title>kojima</title>
        <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills." />
        <meta name="author" content="kojima" />
        <meta name="keywords" content="kojima, ayaka, Portfolio, Frontend" />
        <meta property="og:image" content="" key="ogimage" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <main class="main">
        <div class="main__wrapper">
          <NavIcon />
          <div class="main__section">
            <div class="fv">
              <Image
                alt="fv"
                src={ fv } />
            </div>
            <section class="blog">
              <div class="blog__wrapper">
                <div class="blog__title">
                  <div class="title__img">
                    <Image
                      alt="blog"
                      src={ blogFv } />
                  </div>
                  <h2 class="title__text">Blog</h2>
                </div>
                <ul class="blog__item">
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
            <section class="photo">
              <div class="photo__wrapper">
                <ul class="photo__item">
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
            <section class="contact">

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