import React from 'react';
import styled from 'styled-components';

const StuledWrapperNote = styled.div`
max-width: 85%;
border-bottom-width: 2px;
border-bottom-style : solid;
border-bottom-color : #e9e956;
margin: 0 auto;
padding: 10px;
`;

function WrapperNote(props) {
  return (
    <StuledWrapperNote {...props}/>
  );
}

export default WrapperNote;
