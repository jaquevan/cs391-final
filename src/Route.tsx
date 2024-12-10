// Artemios Kayas, API methods for fetching pokemon cards by varius specifications

import { PokemonCard } from "./interfaces/PokemonCard";


// single set id for increased load times during the presentation
const SET_ID = 'sm35'
// all of these methods are the same sort of async api calls, just fetch different things
// all of them work by importing API key from the .env file, then validating it
//from there, we call the API and give it the key, then return the data
// Validate to make sure it all returned then return the data

// Get a single card by its ID
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
// Get a random card, random effect is achieved by getting all cards, then choosing a random one from the list, using math.random
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

//Find a pokemon card by its Name, different from the ID mehtod, ID wants an ID, this takes the name
export async function getPokemonCardByName(cardName: string): Promise<PokemonCard | null> {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    if (!apiKey) throw new Error('You got no API key!');

    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${cardName}`, {
        headers: { 'X-Api-Key': apiKey },
    });

    if (!response.ok) throw new Error('Failed to fetch cards');

    const { data } = await response.json();


    return data.length > 0 ? data[0] : null;
}


// This handles the API call for getting the x amount of random cards for a deck
// Same math.random method as the single card, but we get x amount of cards
export async function getRandomPokemonCards(count: number): Promise<PokemonCard[]> {
    const apiKey = import.meta.env.VITE_API_KEY as string;
    if (!apiKey) throw new Error('You got no API key!');

    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${SET_ID}`, {
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
