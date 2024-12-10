// Originally Created by Evan Jaquez with updated functionality for adding pokemon cards in to the deck by Jordan
import styled from 'styled-components';

//styling for deck done using styled components
const DeckLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 1.5% 0.1%;
    background: grey;
    width: 100vw;
    height: auto;

    @media screen and (max-width: 1600px){
        height: 100vh;
    }
`;

const CardSlotsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-bottom: 2%;
`;

const CardSlot = styled.div<{ isEmpty: boolean }>`
    width: 15vw;
    height: 20vw;
    border: 2px solid ${({ isEmpty }) => (isEmpty ? 'yellow' : 'green')};
    border-radius: 11px;
    margin: 0.2%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ isEmpty }) => (isEmpty ? 'white' : '#f0f0f0')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: lightgrey;
        cursor: pointer;
        transform: scale(1.01);
        
    }

    img {
        max-width: 100%;
        height: auto;
    }

    h3 {
        margin-top: 10px;
        font-size: 14px;
        text-align: center;
    }
`;
// Styled header text for displaying the title of the deck
const StyledText = styled.h1`
    color: white; 
    margin: 0 auto; 
    padding: 0; 
`;

// Define the expected prop types for the DeckLayout component
type DeckLayoutProps = {
    deck: Array<{ name: string; imageUrl: string | null }>; // Deck is an array of objects containing name and imageUrl
};

// Main DeckLayout component that receives the deck prop
export default function DeckLayout({ deck }: DeckLayoutProps) {
    return (
        <DeckLayoutWrapper>
            <StyledText>Your Team</StyledText> {/* Title for the deck */}
            <CardSlotsContainer>
                {/* Iterate over the deck array to create card slots for each item */}
                {deck.map((card, index) => (
                    <CardSlot key={index} isEmpty={!card.name}> {/* Check if the card slot is empty based on the card's name */}
                        {/* If the card has an image, display it, otherwise show "Empty Slot" */}
                        {card.imageUrl ? (
                            <img src={card.imageUrl} alt={card.name} />
                        ) : (
                            <h3>Empty Slot</h3>
                        )}
                    </CardSlot>
                ))}
            </CardSlotsContainer>
        </DeckLayoutWrapper>
    );
}