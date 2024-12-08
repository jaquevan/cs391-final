import styled from "styled-components";
import DeckLayout from "../other/DeckLayout.tsx";

const StyledDiv = styled.div`
    margin: 0 auto;
    text-align: center;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export default function Deck() {
    return (
        <StyledDiv>
            <DeckLayout/>
        </StyledDiv>
    );
}