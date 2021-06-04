import React from 'react';
import styled from 'styled-components';

const StyledNoteView = styled.div`
overflow: scroll;
max-width: 100%;
vertical-align: middle;
display: inline-block;
margin: 0 auto;
borderRadius: 5px;
textAlign: left;
`;

function NoteView(props) {
  return (
    <StyledNoteView {...props}/>
  );
}

export default NoteView;
