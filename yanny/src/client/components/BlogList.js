import Blog from "./Blog";

function BlogList({ blogs }) {
    return (
        <section className="blogs-conainer">
            <div>
                {blogs.map((blog) => {
                    return <Blog key={blog.id} blog={blog} />
                })}
            </div>
        </section>
    );
}

export default BlogList;