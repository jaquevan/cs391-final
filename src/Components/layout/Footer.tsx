//Made by David Kim, Logic: Used styled components and basic footer structure that we learned in mp3. 

import styled from "styled-components";
import diglett from "../../public/pngwing.com.png";

const StyledFooter = styled.footer`
    background-color: grey;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    position: fixed;
`;
// A styled footer on the bottom
const FooterText = styled.p`
    margin: 0 auto;
`;
// basic footer text
const Logo = styled.img`
    height: 40px;
    margin-left: 20px;
`;

// styled footer, include image, and text 
export default function Footer() {
    return (
        <StyledFooter>
            <Logo src={diglett} alt="Logo" />
            <FooterText>Created by: Evan J, Artemios K, Jordan L, and David K</FooterText>
        </StyledFooter>
    );
}
