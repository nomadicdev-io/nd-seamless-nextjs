import styled from "styled-components";


const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    height: ${({isScrolled})=> isScrolled ? '7.5vh' : '10vh'};
    top:0;
    left:0;
    z-index: 99;
    transition: all 0.3s ease;
    padding: 0.5em 0;

    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
        opacity: ${({isScrolled})=> isScrolled ? 0.5 : 0};
    }

`;

const StyledHeaderWrapper = styled.div`
    width: 100%;
    min-width: 85%;
    max-width: 85%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width:2560px){
        min-width: 75%;
        max-width: 75%;
    }

    @media only screen and (min-width:767px) and (max-width:1200px) and (orientation:portrait){
        min-width: 90%;
        max-width: 90%;
    }

    @media only screen and (max-width: 767px){
        min-width: 100%;
        max-width: 100%;
        padding: 0 16px;
    }
`;


const StyledNavImage = styled.div`
    display: block;
    width: auto;
    height: 100%;
    max-height: 65%;
    .nav_link_{
        position: relative;
        display: block;
        width: auto;
        height: 100%;
    }

    img{
        position: relative;
        display: block;
        width: auto;
        height: 100%;
    }

`;

const StyledNavBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 1.25rem;
`

const StyledNav = styled.nav`
    position: relative;
    display: block;
    width: auto;

    .nav_list {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        grid-gap: 1.5em;
        padding: 0;
        margin: 0;

        .nav_item{
            position: relative;
            display: block;

            a{
                position: relative;
                display: block;
                color: var(--text-color);
                font-size: var(--font-size);
                font-weight: 500;
                transition: all 0.3s ease;

                &:hover{
                    color: var(--primary-color);
                }

            }
        }


    }

`

export {StyledHeader, StyledHeaderWrapper, StyledNavImage, StyledNavBox, StyledNav};