import {GET_RESPONSE, GET_FULL_CARD, SORT_BY_TITLE} from '../actions/actionsType';

const initialState = {
  itemList: [],
  copyItemList: [],
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
        copyItemList: action.itemList,
        basePath: action.basePath,
      } 
    case GET_FULL_CARD:
      return {
        ...state,
        fullCard: action.fullCard
    } 
    case SORT_BY_TITLE:
      let text = action.event.target.value;
      let newItemList = state.copyItemList.filter(elem => elem.name.toLowerCase().includes(text.toLowerCase()));
      return {
        ...state,
        itemList: newItemList,
      }
    default:
      return state;
  }
}

