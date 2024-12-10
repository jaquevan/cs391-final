// Made by Artemios Kayas, gets a and displays a random pokemon card

import { useEffect, useState } from "react";
import { PokemonCard } from "../../interfaces/PokemonCard";
import {getRandomPokemonCard} from "../../Route";
import styled from "styled-components";
// styling
const BubbleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 20vw;
    background-color: white;
    border: 5px solid black;
    border-radius: 45px;
`;

// gets and displays a random card
export default function Pokemon() {
    const [card, setCard] = useState<PokemonCard | null>(null);
    // make sure we loaded a card
    useEffect(() => {
        async function fetchCard() {
            try {
                const fetchedCard = await getRandomPokemonCard();
                setCard(fetchedCard);
            } catch (err) {
                console.error(err);
            }
        }
        // fetch the card
        fetchCard();
    }, []);
    //display the card
    return (
        <BubbleDiv>
            {card ? (
                <>
                    <img src={card.images?.small} alt={card.name}/>
                    <h1>{card.name}</h1>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </BubbleDiv>
    );
}
