import { useRef } from "react";
import Container from "../Container";
import UISection from "../UISection";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import { useWebsiteContext } from "../../store/websiteContent";
import { StyledWrapper } from "../styles/Common.styles";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AnchorButton, ButtonGroup, IconButton } from "../Buttons";
import { ArrowLeft, ArrowRight } from 'react-feather';
import UISwiperNav from "./SwiperNav";
import ClientItem from "../ClientItem";
import { StyledQualityWrapper } from "../styles/Client.styles";
import ClientsQuality from "../ClientsQuality";

const HomeClients = ()=> {

    const {clientsContent} = useWebsiteContext();
    const swiperNext = useRef(null)
    const swiperPrev = useRef(null)

    return (
        <>
            {
                clientsContent &&

                <UISection id="clients">
                    <Container>
                        <UITitleWrapper align={'center'}>
                            <UITitle title={clientsContent.title} />
                        </UITitleWrapper>

                        <StyledWrapper>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView={4}
                                navigation={{
                                    prevEl: swiperPrev.current,
                                    nextEl: swiperNext.current
                                }}
                                breakpoints={{
                                    640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                    },
                                    768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                    },
                                    1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                    },
                                }}
                                >

                                {
                                    clientsContent.items.map((item)=> <SwiperSlide key={item.id}><ClientItem data={item} /></SwiperSlide> )
                                }

                            </Swiper>
                        </StyledWrapper>

                        <ButtonGroup justify="space-between" align="center" marginTop="1.5em">
                           
                            <AnchorButton title="View More"  href="/clients">
                                <ArrowRight />
                            </AnchorButton>

                            <UISwiperNav>
                                <IconButton color={'grey'} iconSize={'sm'} ref={swiperPrev}>
                                    <ArrowLeft />
                                </IconButton>
                                <IconButton color={'grey'} iconSize={'sm'} ref={swiperNext}>
                                    <ArrowRight />
                                </IconButton>
                            </UISwiperNav>
                        </ButtonGroup>
                        
                        <ClientsQuality  data={clientsContent.quality}/>

                    </Container>
                </UISection>
            }
        </>
    )
}

export default HomeClients;