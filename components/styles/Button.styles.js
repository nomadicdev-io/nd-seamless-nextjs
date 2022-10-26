import styled, {css} from "styled-components";

const StyledButtonGroup = styled.div`
    position: relative;
    display: flex;
    align-items: ${({align})=> align ? align : 'center'};
    justify-content: ${({justify})=> justify ? justify : 'center'};
    padding: 0.25em 0;
    grid-gap: 0.5em;
    margin-top: ${({margintop})=> margintop ? margintop : 0 };
`;

const StyledIconButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(var(--font-size) * 2.75);
    height: calc(var(--font-size) * 2.75);
    border-radius: calc(var(--font-size) * 0.5);
    color: var(--text-color);
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;

    ${({color})=> {
        switch (color) {
            case "whatsapp":
                return css`
                background-color: var(--green-color);
                background: var(--green-color);
                `;
            case "grey": 
                return css`
                    background-color: var(--btn-icon-color);
                    background: var(--btn-icon-color);
                `;
             case "white": 
                return css`
                    background-color: var(--white-color);
                    background: var(--white-color);
                    color: var(--bg-color);
                `;
            default:
                return css`
                    background-color: var(--primary-color);
                    background: var(--gradient-color);
                `;
        }
    }}



    svg{
        position: relative;
        display: block;
        height: auto;
        margin: 0 auto;

        ${({iconSize})=> {
            switch (iconSize) {
                case "sm":
                    return css`
                        width: 60%;
                    `;
                case "xs":
                    return css`
                        width: 50%;
                    `;
                default:
                    return css`
                        width: calc(var(--font-size) * 1.5);
                    `
            }   
        }}
    }

    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: calc(var(--font-size) * 0.5);
        filter: blur(1.5rem);
        transition: all 0.3s ease;
        opacity: 0;

        ${({color})=> {
            switch (color) {
                case "whatsapp":
                    return css`
                    background-color: var(--green-color);
                    `;
                case "grey": 
                    return css`
                        background-color: transparent;
                    `;
                case "white": 
                    return css`
                        background-color: var(--white-color);
                    `;
                default:
                    return css`
                        background-color: var(--primary-color);
                    `;
            }
        }}
    }

    &:hover, &:focus, &:active{
        ${({color})=> {
            if(color == 'grey') {
                return css`
                    background-color: var(--third-color);
                `;
            }
        }}
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

`;

const StyledAnchorButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color) ;
    background:var(--gradient-color);
    height: calc(var(--font-size) * 2.75);
    border-radius: calc(var(--font-size) * 0.5);
    color: var(--text-color);
    outline: none;
    border: none;
    padding: 0 1.25em;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 1rem;
    grid-gap: 0.5em;

    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: calc(var(--font-size) * 0.5);
        background-color: var(--primary-color);
        filter: blur(1.5rem);
        transition: all 0.3s ease;
        opacity: 0;
    }

    span{
        position: relative;
        display: block;
    }

    svg{
        position: relative;
        display: block;
        width: 1.5rem;
        height: auto;
        transition: all 0.3s ease;
    }

    &:hover, &:focus, &:active{

        svg{
            transform: translateX(25%);
        }
        &:before{
            top: 10%;
            opacity: 0.85;
        }
    }

`;

export {StyledButtonGroup, StyledIconButton, StyledToggleButton, StyledAnchorButton};