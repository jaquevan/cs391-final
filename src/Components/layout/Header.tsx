// Made by David Kim
import styled from "styled-components";
import diggle from "../../public/diggle.png"

const Title = styled.h1`
    text-align: center;
    font-family: cursive; 
    padding: 20px 0;
    color: white;
`;

const StyledHeader = styled.header`
    background: url(${diggle});
    display: flex;
    font-family: Calibri;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Title>Pokemon Pack Opening</Title>
        </StyledHeader>
    );
}
