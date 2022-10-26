import Head from "next/head";
import Container from "../../components/Container";
import InnerPageBanner from "../../components/sections/InnerPageBanner";
import TextArea from "../../components/TextArea";
import UISection from "../../components/UISection";
import { useWebsiteContext } from "../../store/websiteContent";
import { StyledAboutWidget } from "../../components/styles/Common.styles";
import WidgetItem from "../../components/WidgetItem";

import parse from 'html-react-parser';

const AboutPage = ()=> {

    const {abooutContent} = useWebsiteContext();

    return (
        <>
            <Head>
                    <title>{abooutContent.metadata.title}</title>
            </Head>

            <InnerPageBanner title={abooutContent.title}/>

            <UISection noPaddingTop={true}> 
                <Container>
                    <TextArea>
                        {parse(abooutContent.description)}
                    </TextArea>

                    <StyledAboutWidget>
                        {
                            abooutContent.widget.map((item, index)=> <WidgetItem data={item} delay={index} key={item.id}/>)
                        }
                    </StyledAboutWidget>

                </Container>
            </UISection>

        </>
    )
}

export default AboutPage;