// pages/photo/[id].js
import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';

export default function PhotoId({ photo }) {
    return (
        <main className={ styles.main }>
            <h1 className={ styles.title }>{ photo.title }</h1>
        </main>
    );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "photo" });

    const paths = data.contents.map((content) => `/photo/${content.id}`);
    return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "photo", contentId: id });

    return {
        props: {
            photo: data,
        },
    };
};