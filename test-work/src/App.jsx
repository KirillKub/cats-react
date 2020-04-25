import React, { Component } from 'react';
import './App.scss';
import SideMenu from './side-menu/sideMenu';
import FullCard from './full-card/fullCard';
import { connect } from 'react-redux';
import {fetchData, fetchFullCard, sortByTitle, deleteItem, returnItem} from './redux/actions/actions'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
  componentWillMount() {
    this.props.makeResponse();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <SideMenu 
          itemList={this.props.itemList} 
          getFullCard={this.props.fetchFullCard} 
          sortByTitle={this.props.sortByTitle}
          activeItem={this.props.activeItem}
          deleteItem={this.props.deleteItem}
          returnItem={this.props.returnItem}
          ></SideMenu>  
          <Route path="/:id">
            <FullCard fullCard={this.props.fullCard}></FullCard>  
          </Route>  
          <div>{this.props.req}</div>
        </div>
        <Redirect to={'/'}/>
      </Router>  
    );
  }
}

function mapStateToProps(state) {
  return {
    itemList: state.itemList,
    copyItemList: state.copyItemList,
    basePath: state.basePath,
    fullCard: state.fullCard,
    activeItem: state.activeItem,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    returnItem: (id) => dispatch(returnItem(id)),
    deleteItem: (id) => dispatch(deleteItem(id)),
    sortByTitle: (event) => dispatch(sortByTitle(event)),
    fetchFullCard: (id) => dispatch(fetchFullCard(id)),
    makeResponse: () => dispatch(fetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
