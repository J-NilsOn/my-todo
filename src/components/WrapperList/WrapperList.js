import React from 'react';
import styled from 'styled-components';

const StyleWrapperList = styled.div`
  max-width: 75%;
  min-height: 500px;
  margin: 15px auto;
  border-radius: 2em;
  background-color: #faf5a5;
  border: 2px solid #e9e956; 
  `

function WrapperList(props) {
  return (
    <StyleWrapperList {...props}/>
  );
}

export default WrapperList;
