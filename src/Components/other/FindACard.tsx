//Artemios Kayas Find a card component

import styled from "styled-components";
import { useState } from "react";
import { PokemonCard } from "../../interfaces/PokemonCard";
import { getPokemonCardByName } from "../../Route";
//Styled components for this page


const MyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5% auto;
    align-items: center;
    width: 100vw;
    height: auto;
    background-color: grey;
    
`;

const SmallDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom:2%;
    align-items: center;
`;

const MyH1 = styled.h1`
    margin: 1%;
    font-size: calc(4px + 1.5vw);
    color: darkorange;
    text-align: center;
`;

const SearchBar = styled.input`
    width: 60%;
    padding: 10px;
    margin: 20px 0;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
`;

const SearchButton = styled.button`
    height: 50%;
    padding: 10px 20px;
    background-color: yellow;
    border: 1px solid mediumaquamarine;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-left: 3%;
    &:hover {
        background-color: gold;
    }
`;

const BubbleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
    width: 20vw;
`;

export default function FindACard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [card, setCard] = useState<PokemonCard | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    // States for the search term, card and loading status
    async function handleSearch() {
        //Load the card
        setIsLoading(true);
        setCard(null);

        try {
            const fetchedCard = await getPokemonCardByName(searchTerm);
            if (!fetchedCard || !fetchedCard.name) {
                alert('No card found with that name!');
            } else {
                setCard(fetchedCard);
            }
        } catch (error) {
            console.error('Error fetching Pokémon card:', error);
            alert('Failed to fetch card. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        //display the card
        <MyDiv>
            <MyH1>Search For A Pokemon Card</MyH1>
            <SmallDiv>
                <SearchBar
                    type="text"
                    placeholder="Enter Pokemon name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <SearchButton onClick={handleSearch}>Find Card</SearchButton>
            </SmallDiv>

            {isLoading && <p>Loading card...</p>}

            {!isLoading && card && (
                <BubbleDiv>
                    <img src={card.images?.small} alt={card.name}/>
                </BubbleDiv>
            )}
        </MyDiv>

    );
}
