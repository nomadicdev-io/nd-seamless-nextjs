import styled, { keyframes } from "styled-components";

const StlyledMapWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    padding-top: 40%;
    background-color: var(--third-color);
    border-radius: calc(var(--font-size) * 2);
    overflow: hidden;
    z-index: 1;

    .map-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

    }
`;

const StyledContactWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    border-radius: calc(var(--font-size) * 2);
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
`

const StyledSocialContact = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2em;
    background-color: var(--primary-color);
    background: var(--gradient-color);
    border-radius: calc(var(--font-size) * 2);
    overflow: hidden;
    grid-gap: 1.25em;

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
`

export {StlyledMapWrapper, StyledContactWrapper, StyledSocialContact};