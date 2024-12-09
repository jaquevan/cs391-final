// Created by Evan Jaquez with updated functionality for adding pokemon cards in to the deck
import styled from 'styled-components';

const DeckLayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 5% 0.1%;
    background: grey;
    width: 100vw;
`;

const CardSlotsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const CardSlot = styled.div<{ isEmpty: boolean }>`
    width: 20vw;
    height: 23vw;
    border: 2px solid ${({ isEmpty }) => (isEmpty ? 'yellow' : 'green')};
    border-radius: 11px;
    margin: 0.8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ isEmpty }) => (isEmpty ? 'white' : '#f0f0f0')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: lightgrey;
        cursor: pointer;
        transform: scale(1.1);
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

const StyledText = styled.h1`
    color: white;
    margin: 0;
    padding: 0;
`;

type DeckLayoutProps = {
    deck: Array<{ name: string; imageUrl: string | null }>;
};

export default function DeckLayout({ deck }: DeckLayoutProps) {
    return (
        <DeckLayoutWrapper>
            <StyledText>Your Pokémon Team</StyledText>
            <CardSlotsContainer>
                {deck.map((card, index) => (
                    <CardSlot key={index} isEmpty={!card.name}>
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
