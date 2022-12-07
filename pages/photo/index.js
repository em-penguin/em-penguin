import Head from 'next/head';
import Link from "next/link";
import { client } from "../../libs/client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function Photo({ photo }) {
    return (
        <div>
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
                    <section className="photo">
                        <h2 className="photo__title">Photo</h2>
                        <ul className="photo__item">
                            { photo.map((photo) => (
                                <li key={ photo.id }>
                                    <Link href={ `/photo/${photo.id}` }>
                                        { photo.title }
                                    </Link>
                                </li>
                            )) }
                        </ul>
                    </section>
                </div>
            </main>
            <Footer />
        </div >
    );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const photodata = await client.get({ endpoint: "photo" });
    return {
        props: {
            photo: photodata.contents
        },
    };
};