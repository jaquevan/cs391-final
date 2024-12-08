import styled from 'styled-components';

const DeckLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 5% .1%;
    background: grey;
    width: 100vw;
`;

const CardSlot = styled.div`
    width: 20vw;
    height: 23vw;
    border: 2px solid yellow;
    border-radius: 11px;
    margin: .8%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
        background-color: lightgrey;
        cursor: pointer;
        transform: scale(1.1);
    }
`;

const CardSlotsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const StyledText = styled.h1`
    color: white;
    margin: 0;
    padding: 0;
`;

export default function DeckLayout() {
    return (
        <DeckLayoutWrapper>
            <StyledText>Your Pokemon Team</StyledText>
            <CardSlotsContainer>
                <CardSlot>Pokemon 1 - Ace or EX card</CardSlot>
                <CardSlot>Card 2</CardSlot>
                <CardSlot>Card 3</CardSlot>
                <CardSlot>Card 4</CardSlot>
                <CardSlot>Card 5</CardSlot>
            </CardSlotsContainer>
        </DeckLayoutWrapper>
    );
}