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

    .content_{
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 50%;
        height: 100%;
        flex-wrap: wrap;
        z-index: 2;
        padding-top: 10vh;

        @media only screen and (max-width: 767px){
            width: 100%;
            justify-content: flex-end;
            padding-bottom: 1.5em;
        }

        .inner_{
            position: relative;
            display: block;
            width: 100%;
            margin-bottom: calc(var(--font-size) * 5);

            @media only screen and (max-width: 767px){
                margin-bottom: calc(var(--font-size) * 3);
            }

            h1{
                position: relative;
                display: block;
                margin: 0;
                font-size: calc(var(--font-size) * 4.25);
                line-height: 1.5;
            }

            h4{
                position: relative;
                display: block;
                margin: 0;
                font-size: calc(var(--font-size) * 1.75);
                font-weight: 500;
                line-height: 1.75;
                margin-bottom: 0.5em;
            }

            p{
                position: relative;
                display: block;
                margin: 0;
                line-height: 1.75;
                font-size: calc(var(--font-size) * 1.2);
                margin-bottom: 1em;
                width: 80%;

                @media only screen and (max-width: 1200px) {
                    width: 100%;
                }

            }
        }
        
        .ft_clients{
            position: relative;
            display: block;
            width: 100%;
            opacity: 0.5;

            .title_{
                position: relative;
                display: block;
                line-height: 1.75;
                font-size: calc(var(--font-size) * 1);
                font-weight: 500;
                margin-bottom: 1em;
            }
            
            .image_{
                position: relative;
                display: block;
                width: auto;
                height: auto;
                height: 6.5vh;
                margin-top: 1em;
                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    object-position: left;
                }
            }
        }
    }

`;

const StyledBannerBG = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 767px){
       &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(4,4,4);
            background: linear-gradient(0deg, rgba(4,4,4,1) 0%, rgba(4,4,4,0) 100%);
            z-index: 1;
       }
    }

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