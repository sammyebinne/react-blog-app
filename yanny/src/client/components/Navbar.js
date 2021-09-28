import { useState } from "react";

function Navbar({ addPost, cancelAddPost, grabFilterArgs }) {
  const [showSearchBar, setShowSearchBar] = useState(true);

  const handlePost = () => {
    setShowSearchBar(false);
    addPost();
  };

  const handleCancel = () => {
    setShowSearchBar(true);
    cancelAddPost();
  };

  const filterBlogs = (e) => {
    grabFilterArgs(e.target.value);
  };

  return (
    <nav className="nav-container">
      <div className="logo">Yanny Blog</div>
      {showSearchBar && (
        <input
          className="search-bar"
          type="text"
          placeholder="Search blogs by keywords..."
          onChange={filterBlogs}
        />
      )}
      {showSearchBar ? (
        <button className="add-blog-btn" onClick={handlePost}>
          Post an article!
        </button>
      ) : (
        <button className="add-blog-btn" onClick={handleCancel}>
          Cancel post
        </button>
      )}
    </nav>
  );
}

export default Navbar;
