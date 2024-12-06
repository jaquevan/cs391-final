import styled from "styled-components";
import { useState, useEffect } from "react";
import { PokemonCard } from "../../interfaces/PokemonCard";
import { getRandomPokemonCards } from "../../Route";

const StyledDiv = styled.div`
    text-align: center;
    margin: 0 auto;
`;

export default function Pack() {
    const [cards, setCards] = useState<PokemonCard[]>([]);
    const [preloadedCards, setPreloadedCards] = useState<PokemonCard[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchPack() {
            try {
                const fetchedCards = await getRandomPokemonCards(5);
                setPreloadedCards(fetchedCards);
            } catch (error) {
                console.error("could not fetch cards yo:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPack();
    }, []);

    function handleOpenPack() {
        setCards(preloadedCards);
    }

    return (
        <StyledDiv>
            <h1>Open a Pack</h1>
            <p>Click the button below to open a pack of Pokemon cards!</p>

            {isLoading && <p>Loading your pack in the background...</p>}

            {!isLoading && cards.length === 0 && (
                <button onClick={handleOpenPack}>Open Pack</button>
            )}

            {cards.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                    {cards.map((card) => (
                        <div key={card.id} style={{ border: '1px solid #ccc', padding: '10px', width: '150px' }}>
                            <h3>{card.name}</h3>
                            <img src={card.images?.small} alt={card.name} />
                        </div>
                    ))}
                </div>
            )}
        </StyledDiv>
    );
}
