import styled, { keyframes } from "styled-components";

const StlyledMapWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    padding-top: 40%;
    background-color: var(--third-color);
    border-radius: calc(var(--font-size) * 2.5);
    overflow: hidden;
    z-index: 1;

    .map-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }

    @media only screen and (max-width: 767px){
        padding-top: 80%;
    }

`;

const StyledContactWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    border-radius: calc(var(--font-size) * 2.25);
    overflow: hidden;
    background-color: var(--third-color);
    margin-top: calc(var(--font-size) * -2.25);
    z-index: 2;


    .content_{
        position: relative;
        display: block;
        width: 100%;
        padding: 1em 2em;
    }
`;

const StyledSocialContact = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2em;
    background-color: var(--primary-color);
    background: var(--gradient-color);
    border-radius: calc(var(--font-size) * 2.25);
    overflow: hidden;
    grid-gap: 1.25em;

    @media only screen and (max-width: 767px){
        flex-wrap: wrap;
        justify-content: center;
    }

    h4{
        position: relative;
        display: block;
        margin: 0;
        font-weight: 600;
        font-size: calc(var(--font-size) * 1.35);
    }

    ul{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        grid-gap: 0.75em;
        padding: 0;
        margin: 0;

        li{
            position: relative;
            display: block;
        }
    }
`;

const StyledAddressWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5em;
    margin-bottom: 1.5em;

    @media only screen and (max-width:767px){
        grid-template-columns: 1fr;
    }

    .item_{
        position: relative;
        display: flex;
        align-items: flex-start;

        .icon_{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: calc(var(--font-size) * 2.75);
            height: calc(var(--font-size) * 2.75);
            border-radius: calc(var(--font-size) * 0.5);
            border: none;
            outline: none;
            padding: 0;
            margin-inline-end: 1em;
            background-color: var(--primary-color);
            background: var(--gradient-color);

            svg{
                position: relative;
                display: block;
                height: auto;
                margin: 0 auto;
                width: 50%;
            }
        }

        .field_{
            position: relative;
            display: block;

            span{
                position: relative;
                display: block;
                font-weight: 500;
                font-size: calc(var(--font-size) * 1.1);
                line-height: 2;
            }
        }
    }

`;

export {StlyledMapWrapper, StyledContactWrapper, StyledSocialContact, StyledAddressWrapper};