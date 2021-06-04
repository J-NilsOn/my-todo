import React from 'react';
import styled from 'styled-components';

const StyleFormVeiw = styled.form`
max-width: 85%;
margin: 30px auto;
padding: 10px;
padding-top: 20px;
border-radius: 2em;
border: 2px solid rgb(182, 182, 173)
`

function FormVeiw(props) {
  return (
    <StyleFormVeiw {...props} />
  );
}

export default FormVeiw;
