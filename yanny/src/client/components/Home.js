import { useState } from "react";
import useFetch from "../../assets/customHooks/useFetch";
import BlogList from "./BlogList";
import CreateBlog from "./CreateBlog";
import Navbar from "./Navbar";
import './styles/App.css';

function Home() {
    const url = 'http://localhost:4000/blogs';
    const { data, loading, error } = useFetch(url);
    const [addingPost, setAddingPost] = useState(false);
    const [filteredBlogs, setFilteredBlogs] = useState(data);

    const handleAddPost = () => {
        setAddingPost(true);
    }

    const handleCancelAddPost = () => {
        setAddingPost(false);
    }

    const filterData = (args) => {
        // const input = args.trim().toLowerCase();
        // const test = (info) => info.author.toLowerCase().includes(input) || info.email.toLowerCase().includes(input) || info.text.toLowerCase().includes(input)
        // const filtered = data.filter(test);

        // setFilteredBlogs(filtered);
    }
    


    return (
        <div className="app-container">
            <Navbar addPost={handleAddPost} cancelAddPost={handleCancelAddPost} grabFilterArgs={filterData}/>
            <main className="container">
                {error && <div>{error}</div>}
                {loading && <div>Fetching Blogs...</div>}
                {addingPost && <CreateBlog />}
                {data && !addingPost &&
                    <BlogList blogs={filteredBlogs} />}
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