import styled from "styled-components";

const StyledDiv = styled.div`
    text-align: center;
    margin: 0 auto;
`;
export default function Pack() {
    return (
        <StyledDiv>
            <h1>Open a Pack</h1>
            <p>Click the button below to open a pack of Pokemon cards!</p>
            <button>Open Pack</button>
        </StyledDiv>
    );
}