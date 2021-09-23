import Comment from "./Comment";

function Blog({ blog }) {
    const { title, author, email, text, comments } = blog;

    return (
        <article>
            <div className="blog">
                <div className="blog-header">
                    <h2 className="blog-title">{title}</h2>
                    <h4>By {author}</h4>
                    <h5>{email}</h5>
                </div>
                <p className="blog-content">
                    {text}
                </p>
            </div>
            <div className="comments-container">
                {comments && comments.map((comment) => {
                    return <Comment key={comment.author} comment={comment} />
                })}
            </div>
        </article>
    );
}

export default Blog;