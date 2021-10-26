import { useState } from "react";

function CreateReply({ blogData }) {
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reply = { author, email, text };
    const { id } = blogData;
    const query = id;
    const url = `http://localhost:4000/blogs/${query}/`;
    const oldComments = blogData.comments;

    fetch(url, {
      method: "PATCH",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: [...oldComments, reply],
      }),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <section>
        <form className="reply-form" action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            required
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
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Comment:</label>
          <textarea
            type="text"
            required
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button className="post-reply-btn">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default CreateReply;
