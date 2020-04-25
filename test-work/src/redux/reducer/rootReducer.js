import {GET_RESPONSE} from '../actions/actionsType';

const initialState = {
  itemList: [],
  basePath: '',
}


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESPONSE:
        return {
          ...state,
          itemList: action.itemList,
          basePath: action.basePath,
        }  
    default:
      return state;
  }
}

