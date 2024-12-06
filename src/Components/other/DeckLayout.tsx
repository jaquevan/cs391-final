import styled from 'styled-components';

const DeckLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 5% 0;
    background: grey;
    width: 90vw;
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

export default function DeckLayout() {
    return (
        <DeckLayoutWrapper>
            <h1>Pokemon Team</h1>
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