import styled from "styled-components";

const StyledBannerSection = styled.section`
    position: relative;
    display: block;
    width: 100%;
    height: 100vh;
`;

const StyledBannerWrapper = styled.div`
    display: block;
    position: relative;
    width: 100%;
    min-width: 85%;
    max-width: 85%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;

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

const StyledBannerBG = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    picture{ 
        position: relative;
        display: block;
        width: 100%;
        height: 100%;

        img{
            position: relative;
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: right; 
        }
    }

`

export {StyledBannerSection, StyledBannerWrapper, StyledBannerBG};