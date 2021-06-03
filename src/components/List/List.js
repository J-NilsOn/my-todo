import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initNoteAC } from '../../redux/util/actionCreators';
import Note from '../Note/Note';

function List() {

  const dispatch = useDispatch();
  const { notes } = useSelector(store => store);

  useEffect(() => { dispatch(initNoteAC()) }, [])

  return (
    notes && notes.map(note =>
      <div style={{ maxWidth: "75%", margin: "5px auto" }} key={note.id}>
        <Note note={note} />
      </div>)
  );
}

export default List;
