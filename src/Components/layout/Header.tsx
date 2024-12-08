import styled from "styled-components";
import Typography from '@mui/material/Typography';

const Title = styled(Typography)`
    text-align: center;
    padding: 20px 0;
`;

const StyledHeader = styled.header`
    background-color: lightskyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Title variant="h4">Pokemon Pack Opening</Title>
        </StyledHeader>
    );
}