import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Input = styled.input`
display: block;
    width: 50%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
const InputDiv = styled.div`
display:flex;
text-align:left;
justify-content:flex-start;
padding: 2% 5%;
`;

const CustomInput = ({onChange}) => {
    return (
        <InputDiv><Input onChange={onChange} /></InputDiv>
    )
}

export default CustomInput;
