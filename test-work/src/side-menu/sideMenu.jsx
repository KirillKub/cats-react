import React from 'react';
import './sideMenu.scss';
import ListCard from './list-card/listCard';
import Search from './search/search';

export default function SideMenu(props) {
  return (
    <div className="menu">
      <Search sortByTitle={props.sortByTitle}></Search>
      <ListCard 
      itemList={props.itemList} 
      getFullCard={props.getFullCard} 
      activeItem={props.activeItem}
      deleteItem={props.deleteItem}
      returnItem={props.returnItem}
      ></ListCard>
    </div>
  );
}