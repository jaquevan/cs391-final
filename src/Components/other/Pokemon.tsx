import { useEffect, useState } from "react";
import { PokemonCard } from "../../interfaces/PokemonCard";
import {getRandomPokemonCard} from "../../Route";

export default function Pokemon() {
    const [card, setCard] = useState<PokemonCard | null>(null);

    useEffect(() => {
        async function fetchCard() {
            try {
                const fetchedCard = await getRandomPokemonCard();
                setCard(fetchedCard);
            } catch (err) {
                console.error(err);
            }
        }

        fetchCard();
    }, []);

    return (
        <div>
            {card ? (
                <>
                    <img src={card.images?.small} alt={card.name}/>
                    <h1>{card.name}</h1>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
