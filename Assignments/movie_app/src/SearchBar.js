import React, { useState } from 'react';

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleSubmit(e){

    e.preventDefault();

    if(query.trim()) {
      onSearch(query);
      setQuery('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter movie title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

