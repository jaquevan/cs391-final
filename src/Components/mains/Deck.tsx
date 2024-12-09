//Done by Jordan Lin used styled components and used function from route.tsx
import { useState } from 'react';
import styled from 'styled-components';
import DeckLayout from '../other/DeckLayout.tsx';
import { getPokemonCardByName } from '../../Route';

const StyledDiv = styled.div`
    margin: 0 auto;
    text-align: center;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(41,189,39,1) 27%, rgba(0,212,255,1) 100%);
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const SearchBar = styled.input`
  width: 70%;
  margin: 1%;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: calc(1vh + .5rem);
`;

const AddButton = styled.button`
  padding: 4% 5%;
  background-color: yellow;
  border: none;
  border-radius: 5px;
  font-size: calc(1vh + .5rem);
  cursor: pointer;
  margin-left: 2%;

  &:hover {
    background-color: gold;
  }
`;

export default function Deck() {
    const [deck, setDeck] = useState<Array<{ name: string; imageUrl: string | null }>>(
        Array(5).fill({ name: '', imageUrl: null })
    );
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async () => {
        try {
            const card = await getPokemonCardByName(searchTerm);


            console.log('Fetched Card:', card);
            if (!card || !card.name) {
                alert('No card found with that name!');
                return;
            }


            const firstEmptySlotIndex = deck.findIndex((slot) => !slot.name);
            console.log('First Empty Slot Index:', firstEmptySlotIndex);

            if (firstEmptySlotIndex !== -1) {

                setDeck((prevDeck) => {
                    const updatedDeck = [...prevDeck];
                    updatedDeck[firstEmptySlotIndex] = {
                        name: card.name,
                        imageUrl: card.images?.large || null,
                    };
                    console.log('Updated Deck:', updatedDeck);
                    return updatedDeck;
                });
            } else {
                alert('Deck is full!');
            }
        } catch (error) {
            console.error('Error fetching Pokémon card:', error);
            alert('Failed to fetch card. Please try again.');
        }
    };



    return (
        <StyledDiv>
            <h1>Build Your Pokémon Deck</h1>
            <div>
                <SearchBar
                    type="text"
                    placeholder="Enter Pokémon name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <AddButton onClick={handleSearch}>Add to Deck</AddButton>
            </div>
            <DeckLayout deck={deck}/>
        </StyledDiv>
    );
}
