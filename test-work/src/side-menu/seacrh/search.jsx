import React from 'react';
import './search.scss';

export default function Search() {
  return (
    <div className="search">
      <input type="text" className="search-input" placeholder="Live filter"/>
    </div>
  );
}