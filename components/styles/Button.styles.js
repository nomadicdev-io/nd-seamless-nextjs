import styled from "styled-components";

const StyledIconButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--font-size) * 2.75);
    height: calc(var(--font-size) * 2.75);
    border-radius: calc(var(--font-size) * 0.5);
    border: none;
    background-color: ${({isWhatsapp})=> isWhatsapp ? 'var(--green-color)' : 'var(--primary-color)'} ;
    background: ${({isWhatsapp})=> isWhatsapp ? 'var(--green-color)' : 'var(--gradient-color)'};
    outline: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;

    svg{
        position: relative;
        display: block;
        width: 80%;
        height: auto;
        margin: 0 auto;
    }

    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: calc(var(--font-size) * 0.5);
        background-color: ${({isWhatsapp})=> isWhatsapp ? 'var(--green-color)' : 'var(--primary-color)'};
        filter: blur(1.5rem);
        transition: all 0.3s ease;
        opacity: 0;
    }

    &:hover, &:focus, &:active{
        &:before{
            top: 10%;
            opacity: 0.85;
        }
    }

`;


const StyledToggleButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--font-size) * 2.75);
    height: calc(var(--font-size) * 2.75);
    border-radius: calc(var(--font-size) * 0.5);
    border: none;
    background-color: #232323 ;
    outline: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;

    span{
        position: relative;
        display: block;
        width: 60%;
        height: 3px;
        background-color: var(--text-color);
        border-radius: 2px;
        transition: all 0.3s ease;

        &:before, &:after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: var(--text-color);
            overflow: hidden;
            border-radius: 2px;
            transition: all 0.3s ease;
            transform-origin: center;

        }

        &:before{
            top: calc(var(--font-size) * -0.6);
        }

        &:after{
            top: calc(var(--font-size) * 0.5 + 1.5px);
        }

    }

    &:hover{
        background-color: #1d1d1d;
    }

    &.active{
        span{
            background-color: transparent;
            &:before{
                top: 0;
                transform: rotate(45deg);
            }

            &:after{
                top: 0;
                transform: rotate(-45deg);
            }
        }
    }

`

export {StyledIconButton, StyledToggleButton};