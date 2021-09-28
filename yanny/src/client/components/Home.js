import { useState } from "react";
import useFetch from "../../assets/customHooks/useFetch";
import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import Navbar from "./Navbar";

function Home() {
  // using custom hook to fetch data and filter blogs based on search queries
  const url = "http://localhost:4000/blogs";
  const { data, loading, error, filterData, filteredBlogs } = useFetch(url);

  // conditional rendering when adding a new blog
  const [addingPost, setAddingPost] = useState(false);
  const handleAddPost = () => {
    setAddingPost(true);
  };
  const handleCancelAddPost = () => {
    setAddingPost(false);
  };

  return (
    <div className="app-container">
      <Navbar
        addPost={handleAddPost}
        cancelAddPost={handleCancelAddPost}
        grabFilterArgs={filterData}
      />
      <main className="container">
        {error && <div>{error}</div>}
        {loading && <div>Fetching Blogs...</div>}
        {addingPost && <CreateBlog />}
        {data && !addingPost && <BlogList blogs={filteredBlogs} />}
      </main>
      {/* the below divs are purely for decorative purposes */}
      <div className="bubble-one"></div>
      <div className="bubble-two"></div>
      <div className="bubble-three"></div>
      <div className="bubble-four"></div>
    </div>
  );
}

export default Home;
