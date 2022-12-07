import React from "react";

export default function Form() {
    return (
        <div className="form">
            <form
                action="https://getform.io/f/f7f5eecb-25f3-41d0-8b2d-46af380c7ab5"
                method="POST"
            >
                <div>
                    <label htmlFor="name">お名前</label>
                    <input name="name" type="text" required />
                </div>
                <div>
                    <label htmlFor="email">メールアドレス</label>
                    <input name="email" type="email" required />
                </div>
                <div>
                    <label htmlFor="content">お問い合わせ内容</label>
                    <textarea name="content" type="text" rows="10" required></textarea>
                </div>
                <button type="submit">送信する</button>
            </form>
        </div>
    )
}