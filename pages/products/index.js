import Head from "next/head";
import Container from "../../components/Container";
import InnerPageBanner from "../../components/sections/InnerPageBanner";
import { StyledCommonGrid } from "../../components/styles/Common.styles";
import TextArea from "../../components/TextArea";
import UISection from "../../components/UISection";
import { useWebsiteContext } from "../../store/websiteContent";
import ProductsItem from "../../components/ProductsItem";
import { motion } from "framer-motion";
import { useState } from "react";
import UIModal from "../../components/UIModal";
import { AnimatePresence } from "framer-motion";

const ProductsPage = ()=> {

    const {productsContent} = useWebsiteContext();
    const [modelContent, setModalContent] = useState('');
    const [showModal, setShowModal] = useState(false);

    const productSwiperVariant = {
        offscreen: {opacity: 0},
        onscreen: {
            opacity: 1,
            transition: {
                delay: 0.4,
                staggerChildren: 0.1,
                when: "beforeChildren",
                delayChildren: 0.2,
            }
        }
    }

    const itemClicked = (value)=> {
        setModalContent(value);
        setShowModal(true);
    }

    const modalClose = ()=> {
        setShowModal(false);
    }

    return (
        <>
            <Head>
                    <title>{productsContent.metadata.title}</title>
            </Head>

            <InnerPageBanner title={productsContent.title}/>

            <UISection noPaddingTop={true}>
                <Container>
                    <TextArea>
                        <p>{productsContent.description}</p>
                    </TextArea>

                    <StyledCommonGrid
                        as={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={productSwiperVariant}
                        viewport={{ once: true }}
                    >
                        { productsContent.items.map((item)=> <ProductsItem key={item.id} data={item} itemClicked={()=> itemClicked(item)}/>) }
                    </StyledCommonGrid>

                </Container>
            </UISection>

            <AnimatePresence>
                {
                    showModal &&
                    <UIModal data={modelContent} modalClose={()=> modalClose()}/>
                }
            </AnimatePresence>


        </>
    )
}

export default ProductsPage;