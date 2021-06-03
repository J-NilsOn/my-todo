import { INIT_NOTE, ADD_NOTE, DELETE_NOTE, CHANGE_STATUS_NOTE, COUNTER_STATUS } from './actionTypes';

export const initNoteAC = (payload) => ({
   type: INIT_NOTE,
   payload 
});

export const addNoteAC = (payload) => ({
  type: ADD_NOTE,
  payload 
});

export const deleteNoteAC = (payload) => ({
  type: DELETE_NOTE,
  payload
});

export const changeStatusAC = (payload) => ({
  type: CHANGE_STATUS_NOTE,
  payload
});

export const counterStatusAC = (payload) => ({
  type: COUNTER_STATUS,
  payload
});
