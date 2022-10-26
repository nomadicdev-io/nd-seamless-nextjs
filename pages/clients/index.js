import Head from "next/head";
import Container from "../../components/Container";
import InnerPageBanner from "../../components/sections/InnerPageBanner";
import { StyledCommonGrid } from "../../components/styles/Common.styles";
import UISection from "../../components/UISection";
import { useWebsiteContext } from "../../store/websiteContent";
import ClientItem from "../../components/ClientItem";
import { motion } from "framer-motion";

const ClientsPage = ()=> {

    const {clientsContent} = useWebsiteContext();

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
                <title>{clientsContent.metadata.title}</title>
            </Head>
        
            <InnerPageBanner title={clientsContent.title}/>

            <UISection noPaddingTop={true}>
                <Container>
                    <StyledCommonGrid
                        as={motion.div}
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={productSwiperVariant}
                        viewport={{ once: true }}
                    >
                        { clientsContent.items.map((item)=> <ClientItem key={item.id} data={item} />) }
                    </StyledCommonGrid>
                </Container>
            </UISection>
        </>
    )
}

export default ClientsPage;