// Completed by David Kim Logic: created styled links to go to each page. Nothing too crazy just a basic nav.

import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
    background-color: grey;
    width: 100vw;
    font-size: calc(4px + 1.5vw);
    font-family: Arial, "Droid Sans", sans-serif;
    margin: 0 auto;
    padding: 1%;
    border: 2px solid dimgrey;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: grey;
    justify-content: center;
    width: 100%;
    margin-right: 2%;
    color: black;

    &:hover {
        color: saddlebrown;
    }
`;

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    width: 100%;
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <li><StyledLink to={`/`}>Home</StyledLink></li>
                <li><StyledLink to={`/pack`}>Open Pack</StyledLink></li>
                <li><StyledLink to={`/deck`}>Create Deck</StyledLink></li>
                <li><StyledLink to={'/findacard'}>Find A Card</StyledLink></li>
            </StyledUl>
        </StyledNav>
    );
