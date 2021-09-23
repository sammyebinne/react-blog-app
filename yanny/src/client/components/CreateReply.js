function CreateReply() {
    return (
        <div>
            <section>
                <h4>Reply to post</h4>
                <form className="reply-form" action="">
                    <label htmlFor="name">Name
                        <input name="name" type="text" />
                    </label>
                    <label htmlFor="email">
                        <input type="text" name="email" />
                    </label>
                    <textarea></textarea>
                    <button>Post Reply</button>
                </form>
            </section>
        </div>
    );
}

export default CreateReply;