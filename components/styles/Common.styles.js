import styled, { keyframes } from "styled-components";

const StyledSection = styled.section`
    --s-padding: 12.5vh;
    position: relative;
    display: block;
    width: 100%;
    overflow: hidden;
    padding-top: var(--s-padding);
    padding-bottom: ${({havbePaddingBottom})=> havbePaddingBottom ? 'var(--s-padding)' : 0};

`;

const StyledTitleWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: ${({align})=> align ? align : 'flex-start'};
    justify-content: ${({align})=> align ? align : 'flex-start'};
    margin-bottom: 1em;
`;

const StyledSectionTitle = styled.h2`
    position: relative;
    display: block;
    margin: 0;
    font-size: calc(var(--font-size) * 2.75);
`;

const StyledTextArea = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 0 10%;
    margin-top: 1em;
    text-align: ${({align})=> align ? align : 'start' };

    @media only screen and (max-width: 1200px) {
        padding: 0;
    }

    p{
        position: relative;
        display: block;
        font-weight: normal;
        margin: 1em 0;
        font-size: calc(var(--font-size) * 1.25);
        line-height: 2;

        &:first-child {
            margin-top: 0;
        }

    }

`;

const StyledWhoWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    background-color: var(--third-color);
    overflow: hidden;
    border-radius: calc(var(--font-size) * 1.75);

    .content_{
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        padding: calc(var(--font-size) * 2.5);
    }
`;

const StyledDownloadWrapper = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: calc(var(--font-size) * 1.75) calc(var(--font-size) * 2.5);
    overflow: hidden;
    border-radius: calc(var(--font-size) * 1.75);
    background: var(--gradient-color);

    .left_{
        position: relative;
        display: block;
        color: var(--text-color);

        h3{
            position: relative;
            display: block;
            margin: 0;
            font-size: calc(var(--font-size) * 2);
            font-weight: 600;
        }

        p{
            position: relative;
            display: block;
            margin: 0;
            font-weight: 500;
            font-size: calc(var(--font-size) * 1.25);
        }
        
    }

    .right_{
        position: relative;
        display: block;
        width: auto;

        svg{
            position: relative;
            display: block;
            width: calc(var(--font-size) * 4.5);
            height: auto;
        }
    }
`;

const StyledSectionBG = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    filter: grayscale(1);

    img{
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

const StyledWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    margin-top: 1.5em;

    .services_swiper{
        overflow: initial;
    }

`;

const animSkeleton = keyframes`
    0% { transform: rotate(45deg) scaleY(2) translateX(-150%); }
    100% { transform: rotate(45deg) scaleY(2) translateX(260%); }

`

const StyledSkeletonLoader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    overflow: hidden;
    

    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        background: rgb(25,25,25);
        background: linear-gradient(90deg, rgba(25,25,25,0) 0%, rgba(25,25,25,1) 51%, rgba(25,25,25,0) 100%);
        transform-origin: center;
        transform: rotate(45deg) scaleY(2) translateX(-150%);
        animation-name: ${animSkeleton};
        animation-duration: 0.7s;
        animation-timing-function: ease;
        animation-iteration-count: infinite; 
    }

`;

const StyledSwiperNav = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 0.5em;
`;

const StyledFooterWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 0;

    @media only screen and (max-width:767px) {
        grid-gap: 1.25em;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p{
        position: relative;
        display: block;
        font-size: var(--font-size);
        font-weight: normal;
    }

    ul{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        grid-gap: 1.5em;
        padding: 0;
        margin: 0;

        li{
            position: relative;
            display: block;

            a{
                position: relative;
                display: block;
                color: var(--white-color);
                font-size: var(--font-size);
                font-weight: normal;

                &:hover{
                    color: var(--primary-color);
                }

            }
        }
    }
`

export {
    StyledSection, 
    StyledSectionTitle, 
    StyledTitleWrapper, 
    StyledTextArea,
    StyledWhoWrapper,
    StyledDownloadWrapper,
    StyledSectionBG,
    StyledWrapper,
    StyledSkeletonLoader,
    StyledSwiperNav,
    StyledFooterWrapper
};