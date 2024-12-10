// Made by David Kim Logic: One again used styled components and used an image for the header background. Same structure as the one we did in mp3.

import styled from "styled-components";
import diggle from "../../public/diggle.png"

//Styled title, basic stuff
const Title = styled.h1`
    text-align: center;
    font-family: cursive; 
    padding: 20px 0;
    color: white;
`;
//Styled header with the cool background
const StyledHeader = styled.header`
    background: url(${diggle});
    display: flex;
    font-family: Calibri;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;
// Just styled container and the title
export default function Header() {
    return (
        <StyledHeader>
            <Title>Pokemon Pack Opening</Title>
        </StyledHeader>
    );
}
