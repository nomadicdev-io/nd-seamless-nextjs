import { useRef } from "react";
import Container from "../Container";
import TextArea from "../TextArea";
import UISection from "../UISection";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import { useWebsiteContext } from "../../store/websiteContent";
import SectionBG from "../SectionBG";
import { StyledWrapper } from "../styles/Common.styles";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceItem from "../ServiceItem";
import AnchorButton, { ButtonGroup, IconButton } from "../Buttons";
import { ArrowLeft, ArrowRight } from 'react-feather';
import UISwiperNav from "./SwiperNav";
import { motion } from "framer-motion";

import 'swiper/css';


const HomeServices = ()=> {
    const {servicesContent} = useWebsiteContext();
    const swiperNext = useRef(null)
    const swiperPrev = useRef(null)

    const servicesSwiperVariant = {
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
            servicesContent &&

            <UISection id="services" havbePaddingBottom={true} >
                <SectionBG src="/services_bg.png" />

                <Container>
                    <UITitleWrapper align={'center'}>
                        <UITitle title={servicesContent.title} />
                    </UITitleWrapper>

                    <TextArea>
                        <p>{servicesContent.description}</p>
                    </TextArea>

                    <StyledWrapper
                         as={motion.div}
                         initial="offscreen"
                         whileInView="onscreen"
                         variants={servicesSwiperVariant}
                         viewport={{ once: true }}
                    >
                        <Swiper
                            className="services_swiper"
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
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
                                  slidesPerView: 3,
                                  spaceBetween: 30,
                                },
                              }}
                              onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = swiperPrev.current;
                                swiper.params.navigation.nextEl = swiperNext.current;
                                }}
                            >

                            {
                                servicesContent.items.map((item)=> <SwiperSlide key={item.id}><ServiceItem data={item} /></SwiperSlide> )
                            }

                        </Swiper>
                    </StyledWrapper>

                    <ButtonGroup justify="space-between" align="center" margintop="1.5em">
                           
                            <AnchorButton title="View More"  href="/services">
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

                </Container>

            </UISection>
        } 
       </>
       
    )
}

export default HomeServices;