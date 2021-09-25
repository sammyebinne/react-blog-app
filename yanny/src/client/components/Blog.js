import { useState } from 'react';
import Comment from "./Comment";
import CreateReply from './CreateReply';


function Blog({ blog }) {
    const { id, title, author, email, text, comments } = blog;
    const [expand, setExpand] = useState(false);
    const [enterComment, setEnterComment] = useState(false);

    //  basic functions to handle coonditional render of blog details and comment form
    const expandBlog = () => {
        if (!expand) {
            setExpand(true);
        } else {
            setExpand(false);
            setEnterComment(false);
        }
    }

    const handleComment = () => {
        !enterComment ? setEnterComment(true) : setEnterComment(false);
    }

    // delete method for blog. this could be adapted to a custom hook for reuse in deleting comments
    const deleteBlog = () => {
        fetch('http://localhost:4000/blogs/' + id, {
            method: 'DELETE'
        }).then((res) => {
            console.log(res);
        })
    }

    return (
        <article className="blog-container">
            <div className="blog-header">
                <h2 className="blog-title">{title}</h2>
                <h4>By {author}</h4>
                <h5>{email}</h5>
                <p>
                    {!expand && text.slice(0, 150)}
                    <span>
                        {!expand ? <button className="expand-blog-btn" onClick={expandBlog} >Read more...</button>
                            : <button className="collapse-blog-btn" onClick={expandBlog} >Collapse...</button>}
                    </span>
                </p>
            </div>
            {expand ? <div>
                <p className="blog-content">
                    {text}
                </p>

                {!enterComment && <button onClick={handleComment}>Leave a comment</button>}

                {enterComment && <CreateReply blogData={blog} />}

                <div className="comments-container">
                    <h3>Comments</h3>
                    {comments &&
                        comments.map((comment) => {
                            return <Comment key={comment.author} comment={comment} />
                        })}
                </div>
            </div>
                : <button className="delete-btn" onClick={deleteBlog}>Delete Post</button>}
        </article>
    );
}

export default Blog;