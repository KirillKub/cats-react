import React from 'react';
import './sideMenu.scss';
import ListCars from './list-card/listCard';
import Search from './seacrh/search';

export default function SideMenu() {
  return (
    <div className="menu">
      <Search></Search>
      <ListCars></ListCars>
    </div>
  );
}