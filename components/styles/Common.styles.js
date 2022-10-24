import styled, { keyframes } from "styled-components";

const StyledLoadingScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .image_box{
        position: relative;
        display: block;
        width: auto;
        height: 120px;
        text-align: center;

        img{
            position: relative;
            display: block;
        }
    }
`

const StyledSection = styled.section`
    --s-padding: 15vh;
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
    align-items: ${({align})=> align ? align : 'center'};
    justify-content: ${({justify})=> justify ? justify : 'center'};
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
    padding: ${({nopadding})=> nopadding ? '0' : '0 10%'};
    margin-top: 1em;
    text-align: ${({align})=> align ? align : 'center' };

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

    @media only screen and (max-width:767px){
        flex-wrap: wrap;
        grid-gap: 1.5em;
        text-align: center;
        justify-content: center;
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

        @media only screen and (max-width: 767px){
            width: 85%;
        }

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
        grid-gap: 1em;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p{
        position: relative;
        display: block;
        font-size: var(--font-size);
        font-weight: normal;

        @media only screen and (max-width:767px){
            text-align: center;
            margin-top: 0;
        }

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
`;

const StyledAboutWidget = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: calc(var(--font-size) * 2);
    margin-top: calc(var(--font-size) * 6.5);
    margin-bottom: calc(var(--font-size) * 6.5);

    @media only screen and (max-width:767px){
        grid-template-columns: 1fr;
    }
`;
const StyledWidgetItem = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 1.5em;

    @media only screen and (max-width:767px){
        padding-bottom: 1.5em;
    }

    &:after{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: var(--white-color);

        @media only screen and (max-width:767px){
            width: 100%;
            height: 1px;
            top: auto;
            bottom: 0;
            opacity: 0.25;
        }

    }

    &:last-child{
        &:after{
            display: none;
        }
    }

    .icon_{
        position: relative;
        display: block;
        width: calc(var(--font-size) * 5);
        height: auto;

        img{
            position: relative;
            display: block;
            width: 100%;
            height: auto;
        }
    }

    .content_{
        position: relative;
        display: block;
        opacity: 0.85;
        padding-inline-end: 1.5em;

        h4{
            position: relative;
            display: block;
            margin: 0;
            font-size: var(--font-size);
            line-height: 2;
        }

        p{
            position: relative;
            display: block;
            font-size: calc(var(--font-size) * 0.75);
            margin: 0;
            line-height: 1.75;
        }

    }
`;

const StyledAboutImage = styled.div`
    position: relative;
    display: flex;
    align-items:flex-end;
    justify-content: center;
    width: 100%;

    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgb(4,4,4);
        background: linear-gradient(0deg, rgba(4,4,4,1) 0%, rgba(4,4,4,0) 100%);
    }

    .image_{
        position: relative;
        display: block;
        width: 60%;
        overflow: hidden;
        border-radius: calc(var(--font-size) * 2);
        padding-top: 30%;
        height: 0;
        background-color: var(--bg-color);

        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }

        .img_wrap{
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: calc(var(--font-size) * 2);
        }

        &:nth-child(1), &:nth-child(2){
            position: absolute;
            bottom: 0;
            transform-origin: bottom;
        }

        &:nth-child(1){
            left: 0;
            transform: scale(0.75) translateX(-80%);
        }

        &:nth-child(2){
            right: 0;
            transform: scale(0.75) translateX(80%);
        }
    }

`;

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
    StyledFooterWrapper,
    StyledAboutWidget,
    StyledWidgetItem,
    StyledAboutImage,
    StyledLoadingScreen
};