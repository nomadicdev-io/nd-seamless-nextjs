import Link from "next/link";
import styled from "styled-components";

const StyledProductWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-inline-start: 7.5%;

    @media only screen and (min-width:2560px){
        padding-inline-start: 12.5%;
    }

    @media only screen and (min-width:767px) and (max-width:1200px) and (orientation:portrait){
        padding-inline-start: 5%; 
    }

    @media only screen and (max-width: 767px){
        min-width: 100%;
        max-width: 100%;
        padding: 0 16px;
        flex-wrap: wrap;
        grid-gap: 2.5em;
    }
`;

const StyledProductContent = styled.div`
    position: relative;
    display: block;
    width: 30%;
    padding-inline-end: 5vw;

    @media only screen and (max-width: 767px){
        width: 100%;
        padding-inline-end: 0;
    }
`

const StyledProductSwiper = styled.div`
    position: relative;
    display: block;
    width: 70%;
    overflow: hidden;

    @media only screen and (max-width: 767px){
        width: 100%;
    }

    .product_swiper{
        width: 70%;
        overflow: initial;
        @media only screen and (max-width: 767px){
            width: 80%;
            margin-left: 0;
            margin-right: auto;
        }

    }
`;

const StyledProductItem = styled.a`
    
    position: relative;
    display: block;
    width: 100%;
    padding: calc(var(--font-size) * 0.75);
    background-color: var(--third-color);
    border-radius: calc(var(--font-size) * 1.5);
    transition-timing-function: var(--ease);
    cursor: pointer;
    overflow: hidden;
    z-index: 1;

    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        background-color: var(--primary-color);
        background: var(--gradient-color);
        transform: scaleY(0);
        transform-origin: bottom;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 0;
    }

    .image_{
        position: relative;
        display: block;
        width: 100%;
        border-radius: calc(var(--font-size) * 1.25);
        overflow: hidden;
        height: 0;
        padding-top: 90%;
        background-color: var(--third-color);
        z-index: 1;
        overflow: hidden;
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 0.75;
            transition: all 0.3s ease;
            transform-origin: center;
        }
    }

    .content_{
        position: relative;
        display: flex;
        align-items: flex-start;
        grid-gap: 1.5em;
        width: 100%;
        padding: 1.5em 0 0.5em;
        z-index: 1;
        .title_{
            position: relative;
            display: block;
            width: 100%;
            padding: 0 0.25em;
            h4{
                position: relative;
                display: block;
                margin: 0;
                font-size: calc(var(--font-size) * 1.2);
                line-height: 1.75;
                color: var(--text-color);
            }

            p{
                position: relative;
                display: block;
                margin: 0;
                font-weight: 500;
                opacity: 0.65;
                font-size: calc(var(--font-size) * 0.85);
                line-height: 1.75;
                color: var(--text-color);
            }
        }

        .arrow_{
            position: relative;
            display: block;
            width: auto;
            

        }
    }

    &:hover{

        &:before{
            transform: none;
            opacity:1 ;
        }

        .image_{
            img{
                transform: scale(1.1) rotate(5deg);
            }
        }
    }

`;

export {StyledProductWrapper, StyledProductContent, StyledProductSwiper, StyledProductItem}