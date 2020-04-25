import React, { Component } from 'react';
import './App.scss';
import SideMenu from './side-menu/sideMenu';
import FullCard from './full-card/fullCard';
import { connect } from 'react-redux';
import {fetchData} from './redux/actions/actions'

class App extends Component {
  componentWillMount() {
    this.props.makeResponse();
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <SideMenu itemList={this.props.itemList}></SideMenu>  
        <FullCard></FullCard>  
        <div>{this.props.req}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    itemList: state.itemList,
    basePath: state.basePath,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // isClickSetting: () => dispatch(changeSetting()),
    // isClickSearch: () => dispatch(getResponse()),
    // sortByCount: (event) => dispatch(sortByCount(event)),
    // sortByDate: (event) => dispatch(sortByDate(event)),
    // sortByInput: (event) => dispatch(sortByInput(event)),
    // changeSearchValue: (event) => dispatch(changeSearchValue(event)),
    makeResponse: () => dispatch(fetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
