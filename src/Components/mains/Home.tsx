import styled from "styled-components";

import diglett from "../../../public/diglett.png";


const StyledDiv = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 20px;
`;

const Title = styled.h1`
    font-size: 2.5em;
    color: saddlebrown;
`;

const Subtitle = styled.h2`
    font-size: 1.5em;
    color: lightpink;
`;

const Image = styled.img`
    padding-top: 5%;
    width: 50vh;
    height: auto;
    margin-top: 20px;
`;

export default function Home() {
    return (
        <StyledDiv>
            <Title>Welcome to our Pokemon Pack Opening site!</Title>
            <Subtitle>Discover and collect your favorite Pokemon cards!</Subtitle>
            <Image src={diglett} alt="Mascot" />
        </StyledDiv>
    );
}