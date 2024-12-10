//Done by Jordan Lin used styled components and used function from route.tsx
import { useState } from 'react';
import styled from 'styled-components';
import DeckLayout from '../other/DeckLayout.tsx';
import { getPokemonCardByName } from '../../Route';
import cardImage from '../../public/card.png';

// Styled components for layout and design
const StyledDiv = styled.div`
    margin: 0 auto;
    text-align: center;
    background-image: url(${cardImage});
    background-repeat: repeat;
    background-size: contain;
    color: white;
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2%;
`;

const StyledText = styled.h1`
    color: black; 
    font-size: 2.5rem;
    background-color: white;
    border: none;
    border-radius: 5px;
    margin-bottom: .5%;
    padding: 0 1%;
    
`;

const SearchBar = styled.input`
  width: 70%;
  margin: 1%;
    padding: 2%;
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
    margin-top: 2%;
    margin-bottom: 2%;

  &:hover {
    background-color: gold;
  }
`;

export default function Deck() {
    // State hooks to manage deck and search term
    const [deck, setDeck] = useState<Array<{ name: string; imageUrl: string | null }>>(
        Array(5).fill({ name: '', imageUrl: null }) // Initial empty deck with 5 slots
    );
    const [searchTerm, setSearchTerm] = useState(''); // Initial search term is empty

    // Function to handle the card search and deck update
    const handleSearch = async () => {
        try {
            // Fetch the card details from the API using the search term
            const card = await getPokemonCardByName(searchTerm);

            console.log('Fetched Card:', card); // Log the fetched card for debugging
            // If no card is found or the card doesn't have a name, show an alert
            if (!card || !card.name) {
                alert('No card found with that name!');
                return;
            }

            // Find the first empty slot in the deck
            const firstEmptySlotIndex = deck.findIndex((slot) => !slot.name);
            console.log('First Empty Slot Index:', firstEmptySlotIndex); // Debugging index of the empty slot

            // If there's an empty slot, add the new card to that slot
            if (firstEmptySlotIndex !== -1) {
                setDeck((prevDeck) => {
                    // Create a new deck array to avoid direct mutation
                    const updatedDeck = [...prevDeck];
                    // Fill the first empty slot with the new card's name and image
                    updatedDeck[firstEmptySlotIndex] = {
                        name: card.name,
                        imageUrl: card.images?.large || null, // If no image, set null
                    };
                    console.log('Updated Deck:', updatedDeck); // Log the updated deck
                    return updatedDeck; // Return the updated deck to set the state
                });
            } else {
                alert('Deck is full!'); // If no empty slots, show alert
            }
        } catch (error) {
            // Handle any errors during the fetch process
            console.error('Error fetching pokemon card:', error);
            alert('Failed to fetch card. Please try again.');
        }
    };

    // Rendering the component
    return (
        <>
            {/* Main container for the deck building UI */}
            <StyledDiv>
                <StyledText>Build Your Pokemon Deck</StyledText> {/* Title of the page */}
                <div>
                    {/* Search bar to input Pokemon name */}
                    <SearchBar
                        type="text"
                        placeholder="Enter Name of Pokemon..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                    />
                    {/* Button to trigger the search and add card to deck */}
                    <AddButton onClick={handleSearch}>Add to Deck</AddButton>
                </div>
            </StyledDiv>

            {/* Pass the current deck as a prop to DeckLayout component for display */}
            <DeckLayout deck={deck} />
        </>
    );
}