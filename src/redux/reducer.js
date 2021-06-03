import { INIT_NOTE, ADD_NOTE, DELETE_NOTE, CHANGE_STATUS_NOTE, COUNTER_STATUS } from './util/actionTypes';

const initStore = { notes: [], counterStatus: { done: 0, undone: 0 } };

const reducer = (store = initStore, action) => {
  switch (action.type) {
    case INIT_NOTE:
      return { ...store }

    case ADD_NOTE:
      return { ...store, notes: [...store.notes, action.payload] }

    case DELETE_NOTE:
      return { ...store, notes: store.notes.filter((el) => el.id !== Number(action.payload)) };

    case CHANGE_STATUS_NOTE:
      return { ...store, notes: store.notes.map((el) => el.id === Number(action.payload) ? { ...el, status: !el.status } : el) };

    case COUNTER_STATUS:


    default:
      return store;
  }
}

export default reducer;
