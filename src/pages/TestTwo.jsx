import React from 'react';
import styled from 'styled-components';
import {Carousel,Portal} from '../molecules';

const TestTwoDiv=styled.div`

display:flex;
height:100vh;
width:100vw;
background:yellow;
`;

const Text = () => {
    return (
        <TestTwoDiv>
            <Carousel/>
            <Portal/>
        </TestTwoDiv>
    )
}

export default Text
