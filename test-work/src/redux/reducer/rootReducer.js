import {GET_RESPONSE, GET_FULL_CARD, SORT_BY_TITLE, DELETE_ITEM, RETURN_ITEM, CREATE_STATE, SAVE_STATE} from '../actions/actionsType';

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
      let card = action.fullCard;
      let activeElem = action.activeItem;
      if(state.itemList.find(item => item.id === action.activeItem).deleted || activeElem === 0) {
        card = {
          name: '',
          id: null,
          bio: '',
          pic: '',
          shortInfo: '',
        };
        activeElem = 0;
      }
      return {
        ...state,
        fullCard: card,
        activeItem: activeElem,
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
      let date = new Date();
      item[0].deleted = true;
      item[0].deletedTime = `deleted at ${date.getDate()}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
      newArray.push(...item);
      return {
        ...state,
        itemList: newArray,
        copyItemList: newArray,
      }
    case RETURN_ITEM:
      console.log(1)
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
        fullCard: {
          name: '',
          id: null,
          bio: '',
          pic: '',
          shortInfo: '',
        },
      }
    case CREATE_STATE:
      let {copyItemList,basePath,activeItem, fullCard} = action.data;
      return {
        ...state,
        itemList: copyItemList,
        copyItemList,
        basePath,
        activeItem,
        fullCard,
      }  
    case SAVE_STATE: 
      localStorage.setItem('state', JSON.stringify(state))
      return {
        ...state,
      }
    default:
      return state;
  }
}
