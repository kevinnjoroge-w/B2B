import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await axios.get(`/search?query=${query}`);
        setResults(response.data);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for businesses"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {results.map((business) => (
                    <li key={business._id}>{business.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
