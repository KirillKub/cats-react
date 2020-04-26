import { GET_RESPONSE, GET_FULL_CARD, SORT_BY_TITLE, DELETE_ITEM, RETURN_ITEM, CREATE_STATE, SAVE_STATE } from './actionsType'

export function sortByTitle(event) {
  return {
    type: SORT_BY_TITLE,
    event,
  }
}

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
    activeItem: data.id
  }
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id: id
  }
}

export function returnItem(id) {
  return {
    type: RETURN_ITEM,
    id: id,
  }
}

export function createState() {
  const data = JSON.parse(localStorage.getItem('state'));
  return {
    type: CREATE_STATE,
    data: data,
  }
}

export function saveState() {
  return {
    type: SAVE_STATE,
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
  const {more, shortInfo, name, id} = data;
  return (dispatch) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://mrsoft.by/tz20/${more}`)
    .then(res => res.json())
    .then(elem => dispatch(getFullCard({...elem, shortInfo, name, id})))
  }
}