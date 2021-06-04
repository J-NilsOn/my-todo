import React from 'react';
import styled from 'styled-components';

const StyledButtonDel = styled.button`
display: inline-block;
padding: 1rem;
`;

function ButtonDel(props) {
  return (
    <StyledButtonDel {...props}/>
  );
}

export default ButtonDel;
