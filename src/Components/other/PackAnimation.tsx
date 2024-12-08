// created by Evan Jaquez

import styled from 'styled-components';
import {useEffect, useState} from 'react';

import dragonite from '../../assets/dragonite-pack.jpg';
import lugia from '../../assets/lugia-pack.png';
import pika from '../../assets/pikachu.webp';

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

const PackImage = styled.img`
    width: 70%;
    height: auto;

`;
// array of different pack art images
const packImages = [dragonite, lugia, pika];

interface PackAnimationProps {
    onPackClick: () => void;
}

export default function PackAnimation({onPackClick}: PackAnimationProps) {

    const [packImage, setPackImage] = useState<string>(packImages[0]);
    // picks a random pack image from the array
    useEffect(() => {
        const randomImage = packImages[Math.floor(Math.random() * packImages.length)];
        setPackImage(randomImage);
    }, []);

    return (
        <PackDiv onClick={onPackClick}>
            <PackImage src={packImage} alt="Pack Image"/>
        </PackDiv>
    );
}