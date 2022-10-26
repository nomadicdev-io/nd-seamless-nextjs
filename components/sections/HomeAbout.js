import Container from "../Container";
import TextArea from "../TextArea";
import UISection from "../UISection";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import { useWebsiteContext } from "../../store/websiteContent";
import AnchorButton, { ButtonGroup } from "../Buttons";
import { ArrowRight } from 'react-feather';
import { StyledAboutImage, StyledAboutWidget } from "../styles/Common.styles";
import WidgetItem from "../WidgetItem";
import Image from "next/image";
import { motion } from "framer-motion";



const HomeAbout = ()=> {

    const {abooutContent} = useWebsiteContext();

    const widgetScreen = {
        offscreen: { opacity: 0 },
        onscreen: {
            opacity: 1,
            transition: {
                delay: 1.2,
                staggerChildren: 0.1,
                when: "beforeChildren",
                delayChildren: 0.1,
            }
        }
    }
    
    const imageItem = {
        offscreen: { opacity: 0, y: 200},
        onscreen: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.6
            } 
        }
    }

    return (
        <>
            {
                abooutContent &&

                <UISection id="about">
                    <Container>
                        <UITitleWrapper align={'center'}>
                            <UITitle title={abooutContent.title} animdelay={0.6}/>
                        </UITitleWrapper>

                        <TextArea animdelay={0.8}>
                            <p>{abooutContent.shortDescription}</p>
                        </TextArea>

                        <ButtonGroup align="center" justif="center" animdelay={1}>
                            <AnchorButton title="Read More"  href="/about">
                                <ArrowRight />
                            </AnchorButton>
                        </ButtonGroup>

                        <StyledAboutWidget>
                            {
                                abooutContent.widget.map((item, index)=> <WidgetItem data={item} delay={index} key={item.id}/>)
                            }
                        </StyledAboutWidget>

                        
                    </Container>

                    <StyledAboutImage
                         as={motion.div}
                         initial="offscreen"
                         whileInView="onscreen"
                         variants={widgetScreen}
                         viewport={{ once: true }}
                    >
                        <div className="image_">
                            <motion.div className="img_wrap" variants={imageItem}>
                                <Image src="/about-img-03.jpg" layout="fill" alt="Seamless"/>
                            </motion.div>
                        </div>

                        <div className="image_">
                            <motion.div className="img_wrap" variants={imageItem}>
                                <Image src="/about-img-02.jpg" layout="fill" alt="Seamless"/>
                            </motion.div>
                        </div>

                        <div className="image_">
                            <motion.div className="img_wrap" variants={imageItem}>
                                <Image src="/about-img-01.jpg" layout="fill" alt="Seamless"/>
                            </motion.div>
                        </div>
                    </StyledAboutImage>

                </UISection>
            }
        </>
    )
}

export default HomeAbout;