import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { CustomInput } from '../atoms/index';

import { Sidebar } from '../molecules/index';

let arrayColor = [];
const randomColor = (i) => {
    i = Math.floor(i / 3);
    let r = Math.floor(Math.random() * 16777215).toString(16);
    if (!arrayColor[i]) {
        arrayColor.push(r);
    }
    console.log(arrayColor, i, Math.floor(i / 3));
    console.log(arrayColor[i]);
    return `solid 10px #${arrayColor[i]}`
}

const DummyContainer = styled.div`
display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction:row;
    padding:2% 5%;
    flex-wrap: wrap;
    @media(max-width:480px){
        justify-content:center;
    }
    `;


const DummyDiv = styled.div`
min-height:4em;
min-width:4em;
max-width:13em;
max-height:13em;
margin:2%;
padding:5%;
border-radius: 20px;
    text-align: center;
    padding: 0%;
    background: rgb(247, 247, 247);
    overflow: hidden;
    max-width: 85%;
    box-shadow: rgb(0 0 0 / 20%) 0px 10px 16px 0px, rgb(0 0 0 / 19%) 0px 6px 20px 0px !important;
border:${props => props.highlight ? randomColor(props.index) : "none"};
background:tomato;
font-size:3em;
`;
const BelowHeader = styled.div`
display:flex;
flex-direction:row;
`;
const ContenWrapper = styled.div`
padding:4% 5%;
width:${props => props.isOpen ? '80%' : "100%"};
@media (max-width:480px){    
    width:${props => props.isOpen ? '60%' : '100%'};
}
`;
const SearchWithBoxes = () => {

    const [input, setInput] = useState('');
    const [isOpen, setOpen] = useState(true);
    const handleClose = () => {
        setOpen(!isOpen);
    }
    const handleChange = (e) => {
        const { value } = e.target;

        setInput(value);

    }
    useEffect(() => {
        let lengthOfInput = input.length;
        arrayColor.splice(lengthOfInput);
    }, [input])
    return (
        <BelowHeader style={{ minHeight: '90vh' }}>
            <Sidebar {...{ handleClose, isOpen }} />
            <ContenWrapper isOpen={isOpen}>
                <CustomInput onChange={handleChange} />
                <DummyContainer>{input.split('').map((element, i) => (
                    <DummyDiv highlight={(i + 1) % 3 === 0 && i !== 0 ? true : false} index={i}>
                        {element}
                    </DummyDiv>
                ))} </DummyContainer>
            </ContenWrapper>
        </BelowHeader>
    )
}

export default SearchWithBoxes;
