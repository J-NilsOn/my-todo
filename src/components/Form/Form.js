import React from 'react';
import { useDispatch } from 'react-redux';
import { addNoteAC } from '../../redux/util/actionCreators';
import FormVeiw from '../FormVeiw/FormVeiw';
import { v4 as uuidv4 } from 'uuid';
import InputForm from '../InputForm/InputForm';

function Form() {

  const dispatch = useDispatch();

  function AddNote(event) {
    event.preventDefault();
    const text = event.target.formControl.value;
    (text.length < 5)
      ? alert('Введите не менее пяти символов')
      : dispatch(addNoteAC({ id: uuidv4(), text, status: false }));
    event.target.formControl.value = '';
  };

  return (
    <div >
      <FormVeiw onSubmit={AddNote}>
        <div className="mb-3">
          <InputForm
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            name="formControl"
            placeholder="Input Yours Note"/>
        </div>
        <button type="submit" className="btn btn-primary">Add Note</button>
      </FormVeiw>
    </div>
  );
};

export default Form;
