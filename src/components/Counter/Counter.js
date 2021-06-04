import React from 'react';
import styled from 'styled-components';

const StyleCounter = styled.div`
  display: inline-block;
  margin: 10px;
  padding: 20px;
  border-radius: 2em;
  background-color: rgb(154, 209, 168);
  border: 2px solid rgb(71, 186, 100)
`

function Counter(props) {
  return (
    <StyleCounter {...props} />
  );
}

export default Counter;
