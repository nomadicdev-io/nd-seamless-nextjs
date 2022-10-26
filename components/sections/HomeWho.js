import UISection from "../UISection";
import Container from "../Container";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import TextArea from "../TextArea";
import { useWebsiteContext } from "../../store/websiteContent";
import { StyledDownloadWrapper, StyledWhoWrapper } from "../styles/Common.styles";
import { ReactSVG } from "react-svg";
import { motion } from "framer-motion"

const HomeWho = ()=> {

    const {whoContent} = useWebsiteContext();

    
    const whoAnim = {
        offscreen: { opacity: 0, y: 100 },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6,
                duration: 0.8,
                staggerChildren: 0.1,
                when: "beforeChildren",
                delayChildren: 0.2,
            }
        }
    }

    const downAnim = {
        offscreen: { opacity: 0, y: 100, scaleY: 1.2},
        onscreen: { 
            opacity: 1, 
            y: 0,
            scaleY: 1,
            transition: {
                type: "spring",
                duration: 0.8
            } 
        }
    }


    return (

        <> 
            {
                whoContent &&

                <UISection id="who-we-are">
                    <Container>
                        <StyledWhoWrapper
                            as={motion.div}
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={whoAnim}
                            viewport={{ once: true }}
                        >
                            <div className="content_">
                                <UITitleWrapper align={'center'}>
                                    <UITitle title={whoContent.title} />
                                </UITitleWrapper>
                                <TextArea>
                                    <p>{whoContent.description}</p>
                                </TextArea>
                            </div>

                            <StyledDownloadWrapper
                                as={motion.a}
                                variants={downAnim}
                                target="_blank" 
                                href={whoContent.download.link}
                            >
                                <motion.div 
                                    variants={downAnim}
                                    className="left_"
                                >
                                    <h3>{whoContent.download.title}</h3>
                                    <p>{whoContent.download.buttontitle}</p>
                                </motion.div>

                                <motion.div 
                                    variants={downAnim}
                                    className="right_"
                                >
                                    <ReactSVG src="/download.svg" />
                                </motion.div>
                            </StyledDownloadWrapper>

                        </StyledWhoWrapper>
                    </Container>
                </UISection>
            }
        </>

        
    )
}

export default HomeWho;