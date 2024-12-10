// Component made by Artmemios Kayas with changes made by Evan Jaquez

import styled from "styled-components";
import {useState, useEffect} from "react";
import {PokemonCard} from "../../interfaces/PokemonCard";
import {getRandomPokemonCards} from "../../Route";
import PackAnimation from "../other/PackAnimation";
import loadingGif from '../../public/pokeballs.gif';

const PageWrapper = styled.div`
    background-color: white;
`;

const StyledDiv = styled.div`
    text-align: center;
    margin-top: 2%;
    margin-left: auto;
    margin-right: auto;
`;
const Loading = styled.h1`
    margin: 10% 0;
`;

const Pokeball = styled.img`
    margin: 25% 0;
`;

const CardImage = styled.img`
    width: 35vh;  
    height: auto; 
    object-fit: cover; 
`;

const PackButton = styled.button`
    cursor: pointer;
    padding: 1%;
    margin: 1% auto;
    background-color: deepskyblue;
    border: 2px solid deepskyblue;
    border-radius: 8px;
    color: white;

    &:hover {
        background-color: lightblue;
        border: 2px solid lightblue;
        color: black;
    }
`;

const NextButton = styled.button`
    cursor: pointer;
    padding: 1%;
    margin: 0 auto;
    background-color: darkorange;
    border: 2px solid orange;
    border-radius: 8px;
    color: black;

    &:hover {
        background-color: lightblue;
        border: 2px solid lightblue;
        color: black;
    }
`;

export default function Pack() {
    const [cards, setCards] = useState<PokemonCard[]>([]);
    const [preloadedCards, setPreloadedCards] = useState<PokemonCard[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPackOpen, setIsPackOpen] = useState(false);
    const [isPackClicked, setIsPackClicked] = useState(false);
    const [currentCard, setCurrentCard] = useState(0);


    // moved  this code to make fetch pack reuseable when a user  wants to open another pack
    const fetchPack = async () => {
        //Fetch the card and such
        try {
            const fetchedCards = await getRandomPokemonCards(5);
            setPreloadedCards(fetchedCards);
        } catch (error) {
            console.error("could not fetch cards yo:", error);
        } finally {
            setIsLoading(false);
            setIsPackOpen(true);
        } //error handling and such
    };
    //make sure that the cards actually get fetched with no errors
    useEffect(() => {
        fetchPack();
    }, []);
        // States to handle different things
    const handlePackClick = () => {
        setCards(preloadedCards);
        setIsPackClicked(true);
    };
    const handleOpenAnotherPack = () => {
        setIsLoading(true);
        setIsPackOpen(false);
        setIsPackClicked(false);
        setCards([]);
        setPreloadedCards([]);
        fetchPack();
    };
    // index through the cards
    const handleNextCard = () => {
        setCurrentCard((prevIndex) => (prevIndex + 1) % cards.length);
    };


    return (
    <PageWrapper>
        <StyledDiv>
            {isLoading && (
                <div>
                    <Loading>Loading Your Pack...</Loading>
                    <Pokeball src={loadingGif} alt="Loading..."/>
                </div>
            )}

            {isPackOpen && !isPackClicked && <PackAnimation onPackClick={handlePackClick}/>}

            {isPackClicked && (
                <>
                    <div>
                        <CardImage src={cards[currentCard].images?.small} alt={cards[currentCard].name} />
                    </div>

                <NextButton onClick={handleNextCard}>Next Card</NextButton>
                    <div>
                        <PackButton onClick={handleOpenAnotherPack}>Open Another Pack</PackButton>
                    </div>

                </>
            )}

        </StyledDiv>
    </PageWrapper>

    );
}
