import {GET_RESPONSE, GET_FULL_CARD, SORT_BY_TITLE, DELETE_ITEM, RETURN_ITEM} from '../actions/actionsType';

const initialState = {
  itemList: [],
  copyItemList: [],
  basePath: '',
  activeItem: 0,
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
        fullCard: action.fullCard,
        activeItem: action.activeItem,
    } 
    case SORT_BY_TITLE:
      let text = action.event.target.value;
      let newItemList = state.copyItemList.filter(elem => elem.name.toLowerCase().includes(text.toLowerCase()));
      return {
        ...state,
        itemList: newItemList,
      }
    case DELETE_ITEM:
      let id = action.id;
      let index = state.copyItemList.indexOf(state.copyItemList.find(elem => elem.id === id));
      let newArray = [...state.copyItemList];
      let item = newArray.splice(index,1);
      item[0].deleted = true;
      let date = new Date();
      item[0].deletedTime = `deleted ${date.getDate()}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()} ${date.getUTCHours()}:${date.getMinutes()}`;
      newArray.push(...item);
      return {
        ...state,
        itemList: newArray,
        copyItemList: newArray,
      }
    case RETURN_ITEM:
      let elemId = action.id;
      let elemIndex = state.copyItemList.indexOf(state.copyItemList.find(elem => elem.id === elemId));
      let newArr = [...state.copyItemList];
      let elem = newArr.splice(elemIndex,1);
      elem[0].deleted = false;
      newArr.unshift(...elem);
    return {
      ...state,
      itemList: newArr,
      copyItemList: newArr,
      activeItem: 0,
    }
    default:
      return state;
  }
}

