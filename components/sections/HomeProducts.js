import {useRef} from 'react';
import UISection from "../UISection";
import { useWebsiteContext } from "../../store/websiteContent";
import { StyledProductContent, StyledProductSwiper, StyledProductWrapper } from "../styles/Product.styles";
import TextArea from "../TextArea";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import { AnchorButton, ButtonGroup, IconButton } from "../Buttons";
import { ArrowLeft, ArrowRight } from 'react-feather';
import UISwiperNav from "./SwiperNav";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import ProductsItem from '../ProductsItem';

const HomeProducts = ()=> {

    const {productsContent} = useWebsiteContext();
    const swiperNext = useRef(null)
    const swiperPrev = useRef(null)

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

                    <StyledProductSwiper>
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