import styled from 'styled-components';
import { useEffect, useState } from 'react';

import dragonite from '../../assets/dragonite-pack.jpg';
import lugia from '../../assets/lugia-pack.png';
import pika from '../../assets/pikachu.webp';

const PackDiv = styled.div`
    height: 50vh;
    width: 40vh;
    margin: 0  auto;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.1);
    }
`;

const PackImage = styled.img`
    width: 70%;
    height: auto;
    margin-top: 20%;
    
`;

const packImages = [dragonite, lugia, pika];

export default function PackAnimation(){

    const [packImage, setPackImage] = useState<string>(packImages[0]);

    useEffect(() => {
        const randomImage = packImages[Math.floor(Math.random() * packImages.length)];
        setPackImage(randomImage);
    }, []);

    return (
        <PackDiv>
            <PackImage src={packImage} alt="Pack Image" />
        </PackDiv>
    );
}