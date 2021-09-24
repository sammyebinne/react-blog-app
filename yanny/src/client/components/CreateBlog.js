function CreateBlog () {
    return ( 
        <div>
            <section className="add-blog-page">
                <h4>Write new article</h4>
                <form className="new-blog-form" action="">
                    <label htmlFor="name">Name
                        <input name="name" type="text" />
                    </label>
                    <label htmlFor="email">
                        <input type="text" name="email" />
                    </label>
                    <textarea></textarea>
                    <button>Post Article</button>
                </form>
            </section>
        </div>   
     );
}

export default CreateBlog ;