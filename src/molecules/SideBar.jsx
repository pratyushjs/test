import React, { useState } from "react";
import styled from 'styled-components';
import FloatIcon from '../atoms/CustomIcon';

const SidebarDiv = styled.div`
  height: inherit;
  position: initial;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: :${props => props.isOpen ? 'hidden' : 'visible'};
  transition: 0.5s;
  margin-left:${props => props.isOpen ? '0px' : '-20%'};
  width:20%;
  @media(max-width:480px){
    margin-left:${props=>props.isOpen?'0px':'-40%'};
    width:40%;
}
`;

const SideBar = ({handleClose,isOpen}) => {
    
    return (
        <SidebarDiv isOpen={isOpen}>
            <FloatIcon onClick={handleClose} isOpen={isOpen}>Icon</FloatIcon>
        </SidebarDiv>
    )
}

export default SideBar;
