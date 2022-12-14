import Head from "next/head";
import Container from "../../components/Container";
import InnerPageBanner from "../../components/sections/InnerPageBanner";
import { StyledCommonGrid } from "../../components/styles/Common.styles";
import TextArea from "../../components/TextArea";
import UISection from "../../components/UISection";
import { useWebsiteContext } from "../../store/websiteContent";
import ServiceItem from "../../components/ServiceItem";
import { motion } from "framer-motion";

const ServicesPage = ()=> {

    const {servicesContent} = useWebsiteContext();

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

    return (
        <>
           <Head>
                <title>{servicesContent.metadata.title}</title>
            </Head>
            
            <InnerPageBanner title={servicesContent.title}/>

            <UISection noPaddingTop={true}>
                <Container>
                    <TextArea>
                        <p>{servicesContent.description}</p>
                    </TextArea>

                    <StyledCommonGrid
                        as={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={productSwiperVariant}
                        viewport={{ once: true }}
                        lg={3}
                    >
                        { servicesContent.items.map((item)=> <ServiceItem key={item.id} data={item} />) }
                    </StyledCommonGrid>
                </Container>
            </UISection>
        </>
    )
}

export default ServicesPage;