import React from 'react';
import './App.scss';
import SideMenu from './side-menu/sideMenu';
import FullCard from './full-card/fullCard';

function App() {
  return (
    <div className="App">
      <SideMenu></SideMenu>  
      <FullCard></FullCard>  
    </div>
  );
}

export default App;
