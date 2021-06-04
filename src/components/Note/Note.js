import React from 'react';
import { useDispatch } from "react-redux";
import { changeStatusAC, deleteNoteAC } from "../../redux/util/actionCreators";
import WrapperNote from "../WrapperNote/WrapperNote";
import NoteView from '../NoteView/NoteView';
import ButtonDel from "../ButtonDel/ButtonDel";


function Note({ note: { id, text, status } }) {

  const dispatch = useDispatch();

  function DeleteNote(e) {
    dispatch(deleteNoteAC(e.target.previousSibling.id));
  }

  function changeStatus(e) {
    dispatch(changeStatusAC(e.target.id));
  }

  return (
    <WrapperNote>
      <NoteView onClick={changeStatus} id={id}
        className={status ? "alert alert-secondary text-decoration-line-through" : "alert alert-info"}>
        {text}
      </NoteView>
      <ButtonDel onClick={DeleteNote} type="button" name="del-button" className="btn btn-danger">Del
      </ButtonDel>
    </WrapperNote>
  );
};

export default Note;
