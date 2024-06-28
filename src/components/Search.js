import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({});  // eslint-disable-line no-unused-vars

  const handleSearch = async () => {
    const response = await axios.get('http://localhost:5000/api/search', { params: filters });
    setResults(response.data);
  };

  return (
    <div>
      <h2>Buscar Habitación</h2>
      {/* Añade aquí los campos de filtro */}
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
