import styled from "styled-components";
import { Link } from 'react-router-dom';

const StyledNav = styled.nav`
    background-color: black;
    width: 100vw;
    font-size: calc(4px + 1.5vw);
    font-family: Arial, "Droid Sans", sans-serif;
    margin: 0 auto;
    padding: 1%;
    border: 2px solid darkorange;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: black;
    justify-content: center;
    width: 100%;
    margin-right: 2%;
    color: white;

    &:hover {
        color: darkorange;
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
                <li><StyledLink to={`/`}>View Pokemon</StyledLink></li>
                <li><StyledLink to={`/pack`}>Open Pack</StyledLink></li>
                <li><StyledLink to={`/deck`}>Create Deck</StyledLink></li>
            </StyledUl>
        </StyledNav>
    );
}