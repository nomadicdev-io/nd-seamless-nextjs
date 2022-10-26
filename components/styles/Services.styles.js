import styled from "styled-components";


const StyledServiceItem = styled.div`
    position: relative;
    display: block;
    width: 100%;
    background-color: var(--third-color);
    overflow: hidden;
    border-radius: calc(var(--font-size) * 1.75);
    transition-timing-function: var(--ease);

    .content_{
        position: relative;
        display: block;
        padding: 1.25em 2em;

        h4, p{
            position: relative;
            display: block;
            margin: 0;
        }

        h4{
            font-size: calc(var(--font-size) * 1.15);
            font-weight: 600;
            margin-bottom: 0.25em;
        }

        p{
            font-size: calc(var(--font-size) * 0.9);
            font-weight: 500;
            opacity: 0.65;
        }
    }

    .image_{
        position: relative;
        display: block;
        width: 100%;
        height: 0;
        padding-top: 75%;
        background-color: var(--bg-color);
        overflow: hidden;
        border-radius: calc(var(--font-size) * 1.75);

        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 0.75;
        }
    }

`;


export {StyledServiceItem}