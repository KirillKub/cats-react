import React, { Component } from 'react';
import './App.scss';
import SideMenu from './side-menu/sideMenu';
import FullCard from './full-card/fullCard';
import { connect } from 'react-redux';
import {fetchData, fetchFullCard} from './redux/actions/actions'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

class App extends Component {
  componentWillMount() {
    this.props.makeResponse();
  }
  render() {
    console.log(this.props)
    return (
      <Router>
        <div className="App">
          <SideMenu itemList={this.props.itemList} getFullCard={this.props.fetchFullCard}></SideMenu>  
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
    basePath: state.basePath,
    fullCard: state.fullCard
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFullCard: (id) => dispatch(fetchFullCard(id)),
    makeResponse: () => dispatch(fetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
