import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <Head>
        <title>Kojima Ayaka</title>
        <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills." />
        <meta name="author" content="Kojima Ayaka" />
        <meta name="keywords" content="kojima, ayaka, Portfolio, Frontend" />
        <meta property="og:image" content="" key="ogimage" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <header class="header">
        <div class="header__wrapper">
          <div class="header__logo">
            <Link href="/">
              <div class="header__logo-img">
                <Image
                  alt="logo"
                  src="" />
              </div>
              <h1 class="header__logo-text">kojima</h1>
            </Link>
          </div>
          <nav class="header__nav">
            <ul>
              <li>
                <Link href="">about me</Link>
              </li>
              <li>
                <Link href="">blog</Link>
              </li>
              <li>
                <Link href="">contact</Link>
              </li>
            </ul>
          </nav>
          <div class="header__icon">
            <ul>
              <li>
                <Link href="https://twitter.com/_em_penguin">
                  <Image
                    alt="Twitter"
                    src="" />
                </Link>
              </li>
              <li>
                <Link href="https://qiita.com/_em_penguin">
                  <Image
                    alt="Qiita"
                    src="" />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/ayaka-kojima-0a9b11258/">
                  <Image
                    alt="Linkedin"
                    src="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <ul>
        { blog.map((blog) => (
          <li key={ blog.id }>
            <Link href={ `/blog/${blog.id}` }>
              { blog.title }
            </Link>
          </li>
        )) }
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};