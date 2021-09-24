import { useState } from "react";
import useFetch from "../../assets/customHooks/useFetch";
import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import Navbar from "./Navbar";
import './styles/App.css';

function Home() {
    const { data, loading, error } = useFetch('http://localhost:4000/blogs');
    const [addingPost, setAddingPost] = useState(false);

    const handleAddPost = ()=> { 
        setAddingPost(true);
    }


    return (
        <div className="app-container">
            <Navbar addPost={handleAddPost} />
            <main className="container">
                {error && <div>{error}</div>}
                {loading && <div>Fetching Blogs...</div>}
                {addingPost && <CreateBlog />}
                {data && !addingPost && <div>
                    <BlogList blogs={data} />
                </div>}
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