import styled from "styled-components";
import DeckLayout from "../other/DeckLayout.tsx";

const StyledDiv = styled.div`
    margin: 0 auto;
    text-align: center;
`
export default function Deck() {
    return (
        <StyledDiv>
            <h1>Current Deck</h1>
            <DeckLayout/>
        </StyledDiv>
    );
}