import React, { Component } from 'react';
import './listCard.scss';
import Card from './card'

export default class ListCard extends Component {
  render() {
    let itemList = this.props.itemList.map(item => {
      return(
        <Card 
        key={item.id}
        id={item.id}
        name={item.name}
        shortInfo={item.shortInfo}
        more={item.more}
        deleted={item.deleted}
        deletedTime={item.deletedTime}
        deleteItem={this.props.deleteItem}
        activeItem={this.props.activeItem}
        getFullCard={this.props.getFullCard}
        returnItem={this.props.returnItem}
        >
        </Card>
      )
    })
    return (
      <div>
        {itemList}
      </div>
    );
  }
}