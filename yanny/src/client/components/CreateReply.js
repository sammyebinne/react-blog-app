import { useState } from "react";
// import useFetch from "../../assets/customHooks/useFetch";

function CreateReply({blogData}) {
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const reply = { author, email, text };
        const { id } = blogData;
        const query = id;
        const url = `http://localhost:4000/blogs?${query}/`

        fetch(url).then(res => console.log(res.json()))
        fetch(url, {
            method: 'POST',
            mode: "cors",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(reply)
        }).then((res)=>{
            console.log(res)
        })
        console.log(blogData);
    }

    return (
        <div>
            <section>
                <form className="reply-form" action="" onSubmit={handleSubmit}>
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
                    <label>Comment:</label>
                    <textarea
                        type="text"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <button className="post-reply-btn" >Submit</button>
                </form>
            </section>
        </div>
    );
}

export default CreateReply;