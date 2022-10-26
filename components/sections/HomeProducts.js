import {useRef} from 'react';
import UISection from "../UISection";
import { useWebsiteContext } from "../../store/websiteContent";
import { StyledProductContent, StyledProductSwiper, StyledProductWrapper } from "../styles/Product.styles";
import TextArea from "../TextArea";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import AnchorButton, { ButtonGroup, IconButton } from "../Buttons";
import { ArrowLeft, ArrowRight } from 'react-feather';
import UISwiperNav from "./SwiperNav";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";

import 'swiper/css';
import ProductsItem from '../ProductsItem';

const HomeProducts = ()=> {

    const {productsContent} = useWebsiteContext();
    const swiperNext = useRef(null)
    const swiperPrev = useRef(null)

    const productSwiperVariant = {
        offscreen: {opacity: 0},
        onscreen: {
            opacity: 1,
            transition: {
                delay: 1,
                staggerChildren: 0.1,
                when: "beforeChildren",
                delayChildren: 0.2,
            }
        }
    }

    return (

       <>
        {
            productsContent &&

            <UISection id="products" havbePaddingBottom>

                <StyledProductWrapper>

                    <StyledProductContent>
                        <UITitleWrapper align={'center'} justify={'flex-start'}>
                            <UITitle title={productsContent.title} />
                        </UITitleWrapper>

                        <TextArea align={'start'} nopadding={'true'}>
                            <p>{productsContent.description}</p>
                        </TextArea>

                        <ButtonGroup justify="flex-start" align="center" margintop="1.5em">
                            <UISwiperNav>
                                <IconButton color={'grey'} iconSize={'sm'} ref={swiperPrev}>
                                    <ArrowLeft />
                                </IconButton>
                                <IconButton color={'grey'} iconSize={'sm'} ref={swiperNext}>
                                    <ArrowRight />
                                </IconButton>
                            </UISwiperNav>
                            <AnchorButton title="View More"  href="/products">
                                <ArrowRight />
                            </AnchorButton>
                        </ButtonGroup>

                    </StyledProductContent>

                    <StyledProductSwiper
                        as={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={productSwiperVariant}
                        viewport={{ once: true }}
                    >
                        <Swiper
                            className="product_swiper"
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={{
                                prevEl: swiperPrev.current,
                                nextEl: swiperNext.current
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                640: {
                                  slidesPerView: 1,
                                  spaceBetween: 20,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 30,
                                },
                                1024: {
                                  slidesPerView: 2,
                                  spaceBetween: 30,
                                },
                              }}
                              onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = swiperPrev.current;
                                    swiper.params.navigation.nextEl = swiperNext.current;
                                }}
                            >

                            {
                                productsContent.items.map((item)=> 
                                <SwiperSlide key={item.id}>
                                    <ProductsItem data={item} />
                                </SwiperSlide> )
                            }

                        </Swiper>
                    </StyledProductSwiper>
                    
                </StyledProductWrapper>

            </UISection>
        }
       </>
       
    )
}

export default HomeProducts;