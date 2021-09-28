function Comment({ comment }) {
  const { author, email, text } = comment;

  return (
    <aside className="comment">
      <div className="comment-body">
        <p>"{text}"</p>
      </div>
      <div className="comment-footer">
        <h4>
          <small>by</small> {author}
        </h4>
        <h6>{email}</h6>
      </div>
    </aside>
  );
}

export default Comment;
