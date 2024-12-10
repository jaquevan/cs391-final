//Made by David Kim

import styled from "styled-components";
import diglett from "../../public/diglett.png";

const StyledFooter = styled.footer`
    background-color: saddlebrown;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    bottom: 0;
    left: 0;
    position: fixed;
`;

const FooterText = styled.p`
    margin: 0 auto;
`;

const Logo = styled.img`
    height: 40px;
    margin-left: 20px;
`;


export default function Footer() {
    return (
        <StyledFooter>
            <Logo src={diglett} alt="Logo" />
            <FooterText>Created by: Evan J, Artemios K, Jordan L, and David K</FooterText>
        </StyledFooter>
    );
}