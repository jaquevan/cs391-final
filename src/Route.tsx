// Artemios Kayas, API methods for fetching pokemon cards by varius specifications

import { PokemonCard } from "./interfaces/PokemonCard";

export async function getPokemonCard(cardId: string): Promise<PokemonCard> {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    if (!apiKey) throw new Error('You got no API key!');

    const response = await fetch(`https://api.pokemontcg.io/v2/cards/${cardId}`, {
        headers: { 'X-Api-Key': apiKey }
    });
    if (!response.ok) throw new Error(`No card with ID "${cardId}"`);

    const { data } = await response.json();
    return data as PokemonCard;
}

export async function getRandomPokemonCard(): Promise<PokemonCard> {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    if (!apiKey) throw new Error('You got no API key!');

    const response = await fetch(`https://api.pokemontcg.io/v2/cards`, {
        headers: { 'X-Api-Key': apiKey }
    });
    if (!response.ok) throw new Error('Failed to fetch cards');

    const { data } = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex] as PokemonCard;
}

export async function getPokemonCardByName(cardName: string): Promise<PokemonCard> {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    if (!apiKey) throw new Error('You got no API key!');

    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${cardName}`, {
        headers: { 'X-Api-Key': apiKey }
    });
    if (!response.ok) throw new Error('Failed to fetch cards');

    const { data } = await response.json();
    return data as PokemonCard;
}


export async function getRandomPokemonCards(count: number): Promise<PokemonCard[]> {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    if (!apiKey) throw new Error('You got no API key!');

    const response = await fetch(`https://api.pokemontcg.io/v2/cards`, {
        headers: { 'X-Api-Key': apiKey }
    });
    if (!response.ok) throw new Error('Failed to fetch cards');

    const { data } = await response.json() as { data: PokemonCard[] };
    const chosenCards: PokemonCard[] = [];
    const usedIndicies = new Set<number>();

    while (chosenCards.length < count && chosenCards.length < data.length) {
        const randomIndex = Math.floor(Math.random() * data.length);
        if (!usedIndicies.has(randomIndex)) {
            chosenCards.push(data[randomIndex]);
            usedIndicies.add(randomIndex);
        }
    }
    return chosenCards;
}
