import React from 'react';
import './fullCard.scss';

export default function FullCard(props) {
  const {name, shortInfo, bio, pic} = props.fullCard
  return pic ? (
    <div className="full-card">
      <div className="full-card__block">
        <div className="full-card__block-title">{name}</div>
        <div className="full-card__block-info">{shortInfo}</div>
        <div className="full-card__block-bio">{bio}</div>
      </div>
      <div className="full-card__img">
        <img src={`https://mrsoft.by/tz20/${pic}`} alt="cat"/>
      </div>    
    </div>
  ) : null;
}