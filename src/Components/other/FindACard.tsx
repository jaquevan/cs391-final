import styled from "styled-components";
import Pokemon from "./Pokemon.tsx";

const MyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 72vh;
    background-color: lightgrey;
`;

const MyH1 = styled.h1`
    margin: 1%;
    font-size: calc(4px + 1.5vw);
    color: purple;
`;

export default function FindACard() {
    return (
        <MyDiv>
            <MyH1>Your Lucky Card Is..!</MyH1>
            <Pokemon/>
        </MyDiv>
    );
}