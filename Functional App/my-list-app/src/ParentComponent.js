import React, { useEffect, useState } from 'react';
import ListComponent from './ListComponent';

function ParentComponent() {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if (!res.ok) throw new Error ('undable to fetch data');
            return res.json();
        })

        .then((data) => {
            setPosts(data);
            setFilteredPosts(data);
            setLoading(false);          

        })

        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
    }, [searchTerm, posts]);

    return (
        <div>
            <h1>Blog Posts</h1>
             <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
      />
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {!loading && !error && (
                <ListComponent
                    items={filteredPosts}
                    renderItem={(post) => (
                        <article>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        </article>
                    )}
                />
            )}

        </div>
    );

}
    export default ParentComponent;