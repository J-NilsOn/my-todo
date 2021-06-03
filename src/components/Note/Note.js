import { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeStatusAC, deleteNoteAC } from "../../redux/util/actionCreators";

function Note({ note: {id, text, status} }) {

  const divNote = useRef();
  const dispatch = useDispatch();

  function DeleteNote(){
    dispatch(deleteNoteAC(divNote.current.id));
  }

  function changeStatus(){
    // console.log(divNote.current.id, 'To Notes ID');
    dispatch(changeStatusAC(divNote.current.id));
  }

  // console.log(divNote);
  // console.log(111); 
  if(divNote !== 'undefined'){ console.dir(divNote.current?.id , "divNote.current.id"); }
  id && console.log(id, 'ID');

  return (
    <>
      <div 
        onClick={changeStatus}
        ref={divNote}
        id={id}
        className={status ? "alert alert-secondary text-decoration-line-through" : "alert alert-info"}
        role="alert" 
        style={
          {
          maxWidth: "100%",
          verticalAlign: "middle",
          display: "inline-block",
          margin: "0 auto",
          borderRadius: "5px",
          textAlign: "left"
        }}
        >
        {text}
      </div>
      <button onClick={DeleteNote} type="button" name="del-button" className="btn btn-danger" style={{ display: "inline-block", padding: "1rem" }}>Delete</button>
    </>
  );
};

export default Note;
