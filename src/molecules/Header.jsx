import React from 'react';
import styled from 'styled-components';

const StickyHeader = styled.div`
    position: sticky;
    top: 0px;
    background:tomato;
    min-height:1em;
    padding:1% 4%;

`;

const Header = () => {
    return (
        <StickyHeader>
            This is the sticky header
        </StickyHeader>
    )
}

export default Header
