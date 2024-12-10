// Home page done by David Kim Logic: Wanted to have our mascot spin in the middle and added the two lined transition to have it rotate when hovered. 
// Other than that all else was basic styled components. 
import styled from "styled-components";
import diglett from "../../public/diglett.png";
import diggle from "../../public/diggle.png";

const StyledDiv = styled.div`
    margin: 0 auto;
    text-align: center;
    padding: 23px;
    width: 100%;
    height: 100%;
    background: url(${diggle});
`;

const Title = styled.h1`
    font-size: 2.5em;
    color: white;
`;

const Subtitle = styled.h2`
    font-size: 1.5em;
    color: white;
`;

const Image = styled.img`
    padding-top: 1%;
    width: 50vh;
    height: auto;
    margin-top: 20px;
    transition: transform 2s ease-in-out; 
    &:hover {
        transform: rotate(360deg); 
    }
`;

export default function Home() {
    return (
        <StyledDiv>
            <Title>Welcome to our Pokemon Pack Opening site!</Title>
            <Image src={diglett} alt="Mascot" />
            <Subtitle>Discover and collect your favorite Pokemon cards!</Subtitle>
        </StyledDiv>
    );
}
