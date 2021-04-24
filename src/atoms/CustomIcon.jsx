
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
const FloatIcon=styled.div`
   cursor:pointer;
    height: 30px;
    width: 30px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    float: right;    
    margin-top: 60px;
    position: relative;
    right: -12px;
    text-align:center;
    z-index:0;
`;

const CustomIcon = ({onClick,isOpen}) => {
    return (
        <FloatIcon onClick={onClick} isOpen={isOpen}>
            x
        </FloatIcon>
    )
}

export default CustomIcon
