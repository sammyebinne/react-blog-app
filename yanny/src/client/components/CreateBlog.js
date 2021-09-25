import { useState } from 'react';

function CreateBlog() {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length < 150) {
            // I could handle this better, I promise! lol
            alert("your article is required to be min 150 characters");
        };

        const blogPost = { title, author, email, text };
        const url = "http://localhost:4000/blogs/"

        fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blogPost)
        }).then((res) => {
            console.log(res)
        })


    }


    return (
        <section className="add-blog-page">
            <form className="add-blog-form" action="" onSubmit={handleSubmit}>
                <h3>Write new article</h3>
                <label htmlFor="tile" >Title:</label>
                <input required
                    name="title"
                    type="text"
                    placeholder="title of your article"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="name" >Name:</label>
                <input required
                    name="name"
                    type="text"
                    placeholder="enter your name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label htmlFor="email"> Email:</label>
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label>Article:</label>
                <textarea
                    type="text"
                    placeholder="enter a minimum of 150 characters including spaces and punctuation"
                    required
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <button >Submit</button>
            </form>
        </section>
    );
}

export default CreateBlog;