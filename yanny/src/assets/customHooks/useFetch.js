import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredBlogs, setFilteredBlogs] = useState(null);

    // handling data fetch on render and setting initial render parameters
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw Error('Failed to fetch')
                return res.json();
            })
            .then(data => {
                setData(data);
                setFilteredBlogs(data);
                setLoading(false);
                setError(null);
            })
            .catch((err) => {
                setLoading(false);
                setError(err.message);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    // abstracting search bar function to filter blogs by keywords
    const filterData = (args) => {
        const input = args.trim().toLowerCase();
        const test = (info) => info.title.toLowerCase().includes(input) || info.author.toLowerCase().includes(input) || info.email.toLowerCase().includes(input) || info.text.toLowerCase().includes(input)
        const filtered = data.filter(test);

        setFilteredBlogs(filtered);
    }

    return { data, loading, error, filterData, filteredBlogs };
};

export default useFetch;