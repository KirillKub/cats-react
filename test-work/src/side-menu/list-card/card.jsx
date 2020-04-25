import React from 'react';
import './card.scss';
import { NavLink } from 'react-router-dom';

export default function Card(props) {
  let {shortInfo, more, name} = props 
  return (
    <div className="card" onClick={() => props.getFullCard({more,shortInfo,name})}>
      <NavLink to={`${props.id}`}>
        <div className="card__head" title="select item">
          <div className="card__head-title">{name}</div>
          <div className="card__head-delete" title="delete item">X</div>
        </div>
        <div className="card-info">{shortInfo}</div>
      </NavLink>
    </div>
  );
}
