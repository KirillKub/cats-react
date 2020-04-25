import {GET_RESPONSE, GET_FULL_CARD} from '../actions/actionsType';

const initialState = {
  itemList: [],
  basePath: '',
  fullCard: {
    name: '',
    id: null,
    bio: '',
    pic: '',
    shortInfo: '',
  },
}


export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RESPONSE:
      return {
        ...state,
        itemList: action.itemList,
        basePath: action.basePath,
      } 
    case GET_FULL_CARD:
      return {
        ...state,
        fullCard: action.fullCard
    } 
    default:
      return state;
  }
}

