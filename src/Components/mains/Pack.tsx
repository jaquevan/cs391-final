import styled from "styled-components";
import { useState, useEffect } from "react";
import { PokemonCard } from "../../interfaces/PokemonCard";
import { getRandomPokemonCards } from "../../Route";
import PackAnimation from "../other/PackAnimation";
import loadingGif from '../../assets/pokeballs.gif';

const StyledDiv = styled.div`
    text-align: center;
    margin: 0 auto;
`;
const Loading = styled.h1`
    margin: 10% 0;
`;

const Pokeball = styled.img `
    margin: 25% 0;
`;

export default function Pack() {
    const [cards, setCards] = useState<PokemonCard[]>([]);
    const [preloadedCards, setPreloadedCards] = useState<PokemonCard[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPackOpen, setIsPackOpen] = useState(false);


    useEffect(() => {
        async function fetchPack() {
            try {
                const fetchedCards = await getRandomPokemonCards(5);
                setPreloadedCards(fetchedCards);
            } catch (error) {
                console.error("could not fetch cards yo:", error);
            } finally {
                setIsLoading(false);
                setIsPackOpen(true);
            }
        }
        fetchPack();
    }, []);


    return (
        <StyledDiv>
            {isLoading && (
                <div>
                    <Loading>Loading Your Pack...</Loading>
                    <Pokeball src={loadingGif} alt="Loading..." />
                </div>
            )}

            {isPackOpen && <PackAnimation />}

            {cards.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                    {cards.map((card) => (
                        <div key={card.id}>
                            <img src={card.images?.small} alt={card.name} />
                        </div>
                    ))}
                </div>
            )}
        </StyledDiv>
    );
}
