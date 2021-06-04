import React from 'react';
import styled from 'styled-components';

const StyleInputForm = styled.input`
  width: 75%;
  margin: 0 auto;
`

function InputForm(props) {
  return (
    <StyleInputForm {...props} />
  );
}

export default InputForm;
