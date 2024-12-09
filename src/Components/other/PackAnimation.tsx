// component created by Evan Jaquez

import styled from 'styled-components';
import {useEffect, useState} from 'react';
import { motion } from 'framer-motion';

// import pack images
import dragonite from '../../assets/dragonite-pack.jpg';
import lugia from '../../assets/lugia-pack.png';
import pika from '../../assets/pikachu.webp';
import latias from '../../assets/latias.webp';


const PackDiv = styled.div`
    height: 50vh;
    width: 40vh;
    margin: 0 auto;
    cursor: pointer;
    transition: transform .2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

// image that serves as the pack display
const PackImage = styled.img`
    width: 70%;
    height: auto;

`;

// line that user can drag to rip the pack open
const TearLine = styled(motion.div)`
    height: 1vh;
    width: 28vh;
    margin: 0 auto;
    z-index: 1;
    position: relative;
    
    //linear gradiant with blue in the middle to bring attention to the tear line
    background: linear-gradient(270deg, #ff6347, #0373fc, #ff6347);
    background-size: 600vh 600vh;
    animation: colorCycle 5s ease infinite;
    
    //uses keyframes to animate the color of the line
    @keyframes colorCycle {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
`;

const ChangePackButton = styled.button`
    display: flex;
    flex-direction: column;
    margin: 15% auto;
    
    background-color: deepskyblue;
    border: 2px solid deepskyblue;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    padding: 0.5rem 1rem;

    &:hover {
        background-color: lightblue;
        border: 2px solid lightblue;
        color: black;
    }
`;


// array of different pack art images
const packImages = [dragonite, lugia, pika, latias];

// pack animation props
interface PackAnimationProps {
    onPackClick: () => void;
}

export default function PackAnimation({onPackClick}: PackAnimationProps) {

    const [packImage, setPackImage] = useState<string>(packImages[0]);

    // useEffect to set the pack image to a random one from the array
    useEffect(() => {
        const randomImage = packImages[Math.floor(Math.random() * packImages.length)];
        setPackImage(randomImage);
    }, []);

    // changes the pack image to the next one in the array
    const handleChangePackClick = () => {
        setPackImage((prevImage) => {
            const currentIndex = packImages.indexOf(prevImage);
            const nextIndex = (currentIndex + 1) % packImages.length;
            return packImages[nextIndex];
        });
    };

    return (
        <>
            <PackDiv onClick={onPackClick}>
                <TearLine />
                <PackImage src={packImage} alt="Pack Image"/>
            </PackDiv>

            <ChangePackButton onClick={handleChangePackClick}>
                Change Pack
            </ChangePackButton>
        </>
    );
}