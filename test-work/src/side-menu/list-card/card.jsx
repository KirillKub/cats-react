import React from 'react';
import './card.scss';

export default function Card() {
  return (
    <div className="card">
      <div className="card__head" title="select item">
        <div className="card__head-title">Item name</div>
        <div className="card__head-delete" title="delete item">X</div>
      </div>
      <div className="card-info">Item info</div>
    </div>
  );
}