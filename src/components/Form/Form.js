import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNoteAC } from '../../redux/util/actionCreators';


function Form() {

  const dispatch = useDispatch();

  function AddNote(event) {
    event.preventDefault();
    const text = event.target.formControl.value;
    (text.length < 5)
      ? alert('Введите не менее пяти символов')
      : dispatch(addNoteAC({ id: performance.now(), text, status: false }));
    event.target.formControl.value = '';
  };


  return (
    <div>
      <form style={{ margin: "30px auto" }} onSubmit={AddNote}>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">ToDo</label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="formControl"
            style={{ width: "75%", margin: "0 auto" }}
            placeholder="Input Yours Note"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default Form;
