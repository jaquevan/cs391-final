// component created by Evan Jaquez

import styled from 'styled-components';
import {useEffect, useState} from 'react';
// framer motion presented in show and tell with a hook for animations
import {motion, useAnimation} from 'framer-motion';

// import pack images
import dragonite from '../../public/dragonite-pack.jpg';
import lugia from '../../public/lugia-pack.png';
import pika from '../../public/pikachu.webp';
import latias from '../../public/latias.webp';

// make this a motion div to animate the pack opening on click
const PackDiv = styled(motion.div)`
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
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;

const ChangePackButton = styled.button`
    display: flex;
    flex-direction: column;
    margin: 5% auto;
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
    // animation controls from framer-motion
    const controls = useAnimation();


    // useEffect to set the pack image to a random one from the array
    useEffect(() => {
        // gets a random image from the packImages array
        const randomImage = packImages[Math.floor(Math.random() * packImages.length)];
        // sets the pack to that random image
        setPackImage(randomImage);
    }, []);

    // changes the pack image to the next one in the array
    const handleChangePackClick = () => {
        setPackImage((prevImage) => {
            // find the index of the current pack image in the array
            const currentIndex = packImages.indexOf(prevImage);
            // get the next index in the array with + 1
            const nextIndex = (currentIndex + 1) % packImages.length;
            // return the next pack image index
            return packImages[nextIndex];
        });
    };

    // function to animate the pack opening when the user clicks it
    const handlePackClick = async () => {
        // await the controls to finish before moving to the next animation
        await controls.start({
            x: [0, -30, 30, -40, 40, 0],
            transition: {duration: 0.3},
        });
        // changes opacity to make the pack image flicker
        await controls.start({
            opacity: [1, 0.5, 1, 0.5, 1],
            transition: {duration: 0.5},
        });
        // changes the size of the pack in the animation from small to medium to very large before showing cards
        await controls.start({
            scale: [1, 8, 100],
            transition: {duration: 0.5},
        });
        // calls the onPackClick function to show the cards passed as a prop
        onPackClick();
    };

    return (
        <>
            <PackDiv onClick={handlePackClick} animate={controls}>
                <TearLine/>
                <PackImage src={packImage} alt="Pack Image"/>
            </PackDiv>

                <ChangePackButton onClick={handleChangePackClick}>
                    Change Pack
                </ChangePackButton>


        </>
    );
}