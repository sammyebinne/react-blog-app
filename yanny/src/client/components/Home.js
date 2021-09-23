import useFetch from "../../assets/customHooks/useFetch";
import BlogList from "./BlogList";
import Navbar from "./Navbar";
import '../styles/App.css';

function Home() {
    const { data, loading, error } = useFetch('http://localhost:4000/blogs');

    return (
        <div className="app-container">
            <Navbar />
            <main className="container">
                {error && <div>{error}</div>}
                {loading && <div>Fetching Blogs...</div>}
                {data && <div>
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