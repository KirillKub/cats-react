import {GET_RESPONSE,} from './actionsType'

export function getResponse(data) {
  return {
    type: GET_RESPONSE,
    basePath: data.basepath,
    itemList: data.data,
  }
}

export function fetchData() {
  return (dispatch) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://mrsoft.by/tz20/list.json`)
    .then(res => res.json())
    .then(data => dispatch(getResponse(data)))
  }
}