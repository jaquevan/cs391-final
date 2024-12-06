import styled from "styled-components";

const Title = styled.h1`
    text-align: center;
`

const StyledHeader = styled.header`
    background-color: lightskyblue;
`

export default function Header() {

    return(
        <>
        <StyledHeader>

            <Title>Pokemon Pack Opening</Title>

        </StyledHeader>
        </>
    )
}