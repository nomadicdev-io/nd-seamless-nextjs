import styled, {css} from "styled-components";

const StytledClientItem = styled.a`
    position: relative;
    display: block;
    width: 100%;
    height: 0;
    padding-top: 60%;
    background-color: var(--white-color);
    overflow: hidden;
    border-radius: calc(var(--font-size) * 1.5);

    img{
        position: relative;
        transition: all 0.3s ease;
    }

    &:hover{
        img{
            transform: scale(1.1);
        }
    }
`
const StyledQualityWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: calc(var(--font-size) * 2);
    width: 100%;
    margin-top: calc(var(--font-size) * 5);
    border-radius: calc(var(--font-size) * 2);
    background-color: var(--third-color);
    padding: 1.25em;
    overflow: hidden;

    @media only screen and (max-width:767px){
        grid-template-columns: auto;
        grid-gap: 1.25em;
    }

    .icon_{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(var(--font-size) * 11);
        height: calc(var(--font-size) * 11);
        border-radius: calc(var(--font-size) * 2);
        overflow: hidden;
        background-color: var(--primary-color);
        background: var(--gradient-color);

        @media only screen and (max-width: 767px) {
            width: 100%;
        }
        
        svg{
            position: relative;
            display: block;
            width: 65%;
            height: auto;
            margin: 0 auto;
        }
    }

    .content_{
        position: relative;
        display: block;
        width: 100%;

        h4{
            position: relative;
            display: block;
            margin: 0 0 0.25em;
            line-height: 1.75;
            font-size: calc(var(--font-size) * 1.75);;
        }

        p{
            position: relative;
            display: block;
            margin: 0;
            font-size: calc(var(--font-size) * 1.2);
            line-height: 1.75;
            font-weight: normal;
        }
    }
`

export {StytledClientItem, StyledQualityWrapper};