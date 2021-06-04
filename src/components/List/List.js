import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterStatusAC, initNoteAC } from '../../redux/util/actionCreators';
import Counter from '../Counter/Counter';
import Note from '../Note/Note';
import WrapperList from '../WrapperList/WrapperList';

function List() {

  const dispatch = useDispatch();
  const { notes, counterStatus } = useSelector(store => store);

  useEffect(() => { dispatch(initNoteAC()) }, [])

  useEffect(() => { dispatch(counterStatusAC()) }, [notes])

  return (
    <>
      <WrapperList>
        {!!(counterStatus.done || counterStatus.undone) &&
          (<Counter> Done: {counterStatus.done} // Undone: {counterStatus.undone}</Counter>)
        }
        {notes && notes.map(note =>
          <Note key={note.id} note={note} />
        )}
      </WrapperList>
    </>
  );
}

export default List;
