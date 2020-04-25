import React from 'react';
import './sideMenu.scss';
import ListCard from './list-card/listCard';
import Search from './seacrh/search';

export default function SideMenu(props) {
  return (
    <div className="menu">
      <Search></Search>
      <ListCard itemList={props.itemList} getFullCard={props.getFullCard}></ListCard>
    </div>
  );
}