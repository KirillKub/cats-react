import React from 'react';
import './card.scss';
import { NavLink } from 'react-router-dom';
import returnImgUrl from '../../assets/img/refresh-white-18dp.svg';

export default function Card(props) {
  let {shortInfo, more, name, id, deleted, deletedTime} = props; 
  return (
    deleted ? 
    <div className="card deleted" title="deleted item">
      <div className="card__head">
        <div className="card__head-title">{name}</div>
        <NavLink to={`/`}>
        <div className="card__head-delete" title="return item" onClick={() => props.returnItem(id)}><img src={returnImgUrl} alt="" width="15"/></div>
        </NavLink>
      </div>
      <div className="card-info">{`${deletedTime}`}</div>
    </div> 
    : 
    <NavLink to={`${id}`}>
      <div className={props.activeItem === id ? "card active" : "card"} title="select item" onClick={() => props.getFullCard({more,shortInfo,name,id})}>
        <div className="card__head">
          <div className="card__head-title">{name}</div>
          <div className="card__head-delete" title="delete item" onClick={() => props.deleteItem(id)}>X</div>
        </div>
        <div className="card-info">{shortInfo}</div>
      </div>
    </NavLink>
  );
}
