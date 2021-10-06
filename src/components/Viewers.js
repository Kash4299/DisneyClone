import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src="./images/viewers-disney.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="./videos/disney.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="./images/viewers-pixar.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="./videos/pixar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="./images/viewers-marvel.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="./videos/marvel.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="./images/viewers-starwars.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="./videos/starwar.mp4" type="video/mp4" />
                </video>
            </Wrap>
            <Wrap>
                <img src="./images/viewers-national.png" />
                <video autoPlay={true} loop={true} playsInline={true}>
                    <source src="./videos/national.mp4" type="video/mp4" />
                </video>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    padding: 30px 0px 26px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }

`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    position: relative;
    overflow: hidden;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        transition: opacity 500ms ease-in-out 0s;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
    }
`