function Navbar({ addPost }) {

    return (
        <nav className="nav-container">
            <div className="logo">Yanny Blog</div>
            <input className="search-bar" type="text" placeholder="Search blog by author's name, email or keywords..." />
            <button className="add-blog-btn" onClick={addPost}>Post an article!</button>
        </nav>
    );
}

export default Navbar;