import React from 'react';
import './card.scss';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__head" title="select item">
        <div className="card__head-title">{props.name}</div>
        <div className="card__head-delete" title="delete item">X</div>
      </div>
  <div className="card-info">{props.shortInfo}</div>
    </div>
  );
}