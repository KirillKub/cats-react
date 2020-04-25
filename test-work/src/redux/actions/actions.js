import {GET_RESPONSE, GET_FULL_CARD} from './actionsType'

export function getResponse(data) {
  return {
    type: GET_RESPONSE,
    basePath: data.basepath,
    itemList: data.data,
  }
}

export function getFullCard(data) {
  return {
    type: GET_FULL_CARD,
    fullCard: data,
  }
}

export function fetchData() {
  return (dispatch) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://mrsoft.by/tz20/list.json`)
    .then(res => res.json())
    .then(data => dispatch(getResponse(data)))
  }
}

export function fetchFullCard(data) {
  const {more, shortInfo, name} = data;
  return (dispatch) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://mrsoft.by/tz20/${more}`)
    .then(res => res.json())
    .then(elem => dispatch(getFullCard({...elem, shortInfo, name})))
  }
}