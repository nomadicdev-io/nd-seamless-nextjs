import { useRef } from "react";
import Container from "../Container";
import UISection from "../UISection";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import { useWebsiteContext } from "../../store/websiteContent";
import { StyledWrapper } from "../styles/Common.styles";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AnchorButton, { ButtonGroup, IconButton } from "../Buttons";
import { ArrowLeft, ArrowRight } from 'react-feather';
import UISwiperNav from "./SwiperNav";
import ClientItem from "../ClientItem";
import ClientsQuality from "../ClientsQuality";
import { motion } from "framer-motion";

const HomeClients = ()=> {

    const {clientsContent} = useWebsiteContext();
    const swiperNext = useRef(null)
    const swiperPrev = useRef(null)

    const clientsSwiperVariant = {
        offscreen: {opacity: 0},
        onscreen: {
            opacity: 1,
            transition: {
                delay: 0.2,
                staggerChildren: 0.1,
                when: "beforeChildren",
                delayChildren: 0.2,
            }
        }
    }


    return (
        <>
            {
                clientsContent &&

                <UISection id="clients">
                    <Container>
                        <UITitleWrapper align={'center'}>
                            <UITitle title={clientsContent.title} />
                        </UITitleWrapper>

                        <StyledWrapper
                            as={motion.div}
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={clientsSwiperVariant}
                            viewport={{ once: true }}
                        >
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={30}
                                slidesPerView={2}
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
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = swiperPrev.current;
                                    swiper.params.navigation.nextEl = swiperNext.current;
                                }}
                                >

                                {
                                    clientsContent.items.map((item)=> <SwiperSlide key={item.id}><ClientItem data={item} /></SwiperSlide> )
                                }

                            </Swiper>
                        </StyledWrapper>

                        <ButtonGroup justify="space-between" align="center" margintop="1.5em">
                           
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