import React, {useState} from 'react';
import {BsSearch} from 'react-icons/bs';

import './SearcheBar.css';




function SearchBar() {

  const [searcheValue, setSearcheValue] = useState('');
  return (  
    <form className="searche-bar">
      <input
        type="search"
        value={searcheValue}
        placeholder="Buscar Produto"
        className="search__input"
        onChange={({target}) => setSearcheValue(target.value)}
        required
      />
    
      <button type="submit" className="search__button">
        <BsSearch/>
      </button>
    </form>
  );
}

export default SearchBar ;
