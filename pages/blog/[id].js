// pages/blog/[id].js
import { client } from "../../libs/client";
import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import {
    mainFv,
    blogFv
} from '../../assets'
import Header from "../../components/Header";
import NavIcon from "../../components/NavIcon";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import ImgSlide from "../../libs/ImgSlide"
import Fadein from "../../libs/Fadein"

export default function BlogId({ blog }) {
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
            <main id="blog-single" className="main">
                <div className="main__wrapper">
                    <NavIcon />
                    <div className="main__section">
                        <ImgSlide />
                        <section className="blog-single">
                            <div className="blog-single__wrapper">
                                <Link href={ `/blog/${blog.id}` } key={ blog.id }>
                                    <div className="blog-single__title">
                                        <div className="blog-single__left">
                                            <Image
                                                alt={ blog.title }
                                                width={ blog.img["width"] }
                                                height={ blog.img["height"] }
                                                src={ blog.img["url"] } />
                                        </div>
                                        <div className="blog-single__right">
                                            <h2 className="blog-single__right-title">{ blog.title }</h2>
                                            <p>{ blog.publishedAt }</p>
                                        </div>
                                    </div>
                                    <div className="blog-single__body">
                                        { blog.body }
                                    </div>
                                </Link>
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
                </div >
            </main >
            <Footer />
        </div >
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });

    return {
        props: {
            blog: data,
        },
    };
};