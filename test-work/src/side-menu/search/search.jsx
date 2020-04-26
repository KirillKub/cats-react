import React from 'react';
import './search.scss';

export default function Search(props) {
  return (
    <div className="search">
      <input onInput={props.sortByTitle} type="text" className="search-input" placeholder="Live filter(by name)"/>
    </div>
  );
}