import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Box, CircularProgress } from '@mui/material';

export const GradientBackgroundCon = styled.div`
    background: linear-gradient(to right, #000046, #1cb5e0);
    background-size: 400% 400%;
    animation: gradi 10s ease infinite;
    height: 100vh;
    width: 100vw;
    @keyframes gradi {
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

export const BackgroundImageOne = styled(Image)`
    position: relative;
    z-index: 1;
    margin-left: -10px;
    margin-top: -10px;
`;

export const BackgroundImageTwo = styled(Image)`
    position: fixed;
    z-index: 1;
    right: -120px;
    bottom: -10px;
`;

export const CustomLink = styled(Link)`
    color: orange;
`;

export const CustomFooter = styled.div`
    width: 100vw;
    height: 50px;
    text-align: center;
    font-family: 'Source Code Pro', monospace;
    font-size: 15px;
    position: absolute;
    bottom: 0;
    color: white;
    z-index: 1000000;
`;

export const CustomFooterLink = styled(Link)`
    color: green;
`;

export const GoldSpan = styled.span`
    color: gold;
`;

export const QuoteGeneratorFeature = styled.div`
    min-height: 350px;
    min-width: 350px;
    height: 70vh;
    width: 70vw;
    border: 2px solid #ffffff22;
    border-radius: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    z-index: 2;
    background: rgba(0, 0, 70, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const InnerQuoteGenerator = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 100%;
`;

export const QuoteGeneratorTitle = styled.div`
    font-family: 'Permanent Marker', cursive;
    font-size: 50px;
    text-align: center;
    color: white;
    padding: 0 20px 0 20px;
    position: relative;
    /* media query for mobile */
    @media only screen and (max-width: 600px) {
        font-size: 30px;
    }
`;

export const QuoteGeneratorSubTitle = styled.div`
    color: white;
    font-family: 'Caveat', cursive;
    font-size: 35px;
    position: relative;
    width: 100%;
    text-align: center;
    padding: 0 20px 0 20px;
    @media only screen and (max-width: 600px) {
        font-size: 25px;
    }
`;

export const QuoteGeneratorButton = styled.div`
    height: 100px;
    width: 300px;
    border: 2px solid darkgrey;
    border-radius: 20px;
    margin-top: 20px;
    position: relative;
    transition: 0.2s all ease-in-out;
    cursor: pointer;
    top: 20px;
    margin: auto;
    transform-origin: center;
    background: rgba(0, 0, 70, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    &:hover {
        filter: brightness(3);
        transition: 0.2s all ease-in-out;
        transform: scale(1.1);
        transform-origin: center;
    }
`;

export const QuoteGeneratorButtonText = styled.div`
    color: white;
    font-family: 'Caveat', cursive;
    font-size: 35px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    width: 100%;
    text-align: center;
`;

export const QuoteGeneratorPopup = styled(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vh;
    box-shadow: 24;
    /* transition: 0.2s all ease-in-out; */

    background: rgb(193 193 255 / 19%);
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    -webkit-backdrop-filter: blur( 20px );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 10px;
    border: 1px solid rgba( 255,255,255,0.18 );

    &:focus {
      outline: none !important;
    }
`;

export const QuoteGeneratorInnerPopup = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: relative;
`;

export const ModalCircularProgress = styled(CircularProgress)`
    color: white !important;
    stroke-linecap: round;
    position: relative;
    /* to account for the larger element pushing left */
    margin-left: -55px;
    left: 50%;
    transform: translateX(-50%);
`;
