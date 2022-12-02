import Head from 'next/head';
import Link from "next/link";
import { client } from "../libs/client";
import Header from "../components/Header";

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
      <Header />
      <ul>
        { blog.map((blog) => (
          <li key={ blog.id }>
            <Link href={ `/blog/${blog.id}` }>
              { blog.title }
            </Link>
          </li>
        )) }
      </ul>
    </div >
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