function Navbar() {
    return (
        <nav className="nav-container">
            <div className="logo">Yanny Blog</div>
            <form className="search-bar">
                <input type="text" placeholder="Search by..."/>
                <select name="search-filter" id="">
                    <option value="author">Author</option>
                    <option value="email">Email</option>
                    <option value="blog text">Blog Text</option>
                </select>
            </form>
            <button className="add-blog-btn">Post an article!</button>
        </nav>
    );
}

export default Navbar;