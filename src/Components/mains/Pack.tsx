import styled from "styled-components";
import {useState, useEffect} from "react";
import {PokemonCard} from "../../interfaces/PokemonCard";
import {getRandomPokemonCards} from "../../Route";
import PackAnimation from "../other/PackAnimation";
import loadingGif from '../../assets/pokeballs.gif';

const StyledDiv = styled.div`
    text-align: center;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
`;
const Loading = styled.h1`
    margin: 10% 0;
`;

const Pokeball = styled.img`
    margin: 25% 0;
`;

const PackButton = styled.button`
    cursor: pointer;
    padding: 1%;
    margin-top: 2%;
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

export default function Pack() {
    const [cards, setCards] = useState<PokemonCard[]>([]);
    const [preloadedCards, setPreloadedCards] = useState<PokemonCard[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPackOpen, setIsPackOpen] = useState(false);
    const [isPackClicked, setIsPackClicked] = useState(false);


    // moved  this code to make fetch pack reuseable when a user  wants to open another pack
    const fetchPack = async () => {
        try {
            const fetchedCards = await getRandomPokemonCards(5);
            setPreloadedCards(fetchedCards);
        } catch (error) {
            console.error("could not fetch cards yo:", error);
        } finally {
            setIsLoading(false);
            setIsPackOpen(true);
        }
    };

    useEffect(() => {
        fetchPack();
    }, []);

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


    return (

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
                    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px'}}>
                        {cards.map((card) => (
                            <div key={card.id}>
                                <img src={card.images?.small} alt={card.name}/>
                            </div>
                        ))}
                    </div>
                    <PackButton onClick={handleOpenAnotherPack}>Open Another Pack</PackButton>
                </>
            )}

        </StyledDiv>

    );
}
