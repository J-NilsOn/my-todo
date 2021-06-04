import React from 'react';
import styled from 'styled-components';

const StyleWrapperApp = styled.div`
  text-align: center;
  border-radius: 1em;
  padding-top: 18px;
  background-color: rgb(228, 228, 224);
  min-height: 800px;
  margin-bottom: 20px"
`

function WrapperApp(props) {
  return (
    <StyleWrapperApp {...props}/>
  );
}

export default WrapperApp;
