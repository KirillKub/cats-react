import React from 'react';
import './fullCard.scss';

export default function FullCard() {
  return (
    <div className="full-card">
      <div className="full-card__block">
        <div className="full-card__block-title">Selected Item Name</div>
        <div className="full-card__block-info">Short info</div>
        <div className="full-card__block-bio">bio</div>
      </div>
      <div className="full-card__img">
        <img src="https://mrsoft.by/tz20//pics/13_.jpg" alt=""/>
      </div>    
    </div>
  );
}