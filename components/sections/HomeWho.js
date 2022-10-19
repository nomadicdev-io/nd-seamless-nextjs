import UISection from "../UISection";
import Container from "../Container";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import TextArea from "../TextArea";
import { useWebsiteContext } from "../../store/websiteContent";
import { StyledDownloadWrapper, StyledWhoWrapper } from "../styles/Common.styles";
import { ReactSVG } from "react-svg";


const HomeWho = ()=> {

    const {whoContent} = useWebsiteContext();

    return (

        <>
            {
                whoContent &&

                <UISection id="who-we-are">
                    <Container>
                        <StyledWhoWrapper>
                            <div className="content_">
                                <UITitleWrapper align={'center'}>
                                    <UITitle title={whoContent.title} />
                                </UITitleWrapper>
                                <TextArea>
                                    <p>{whoContent.description}</p>
                                </TextArea>
                            </div>

                            <StyledDownloadWrapper target="_blank" href={whoContent.download.link}>
                                <div className="left_">
                                    <h3>{whoContent.download.title}</h3>
                                    <p>{whoContent.download.buttontitle}</p>
                                </div>

                                <div className="right_">
                                    <ReactSVG src="/download.svg" />
                                </div>
                            </StyledDownloadWrapper>

                        </StyledWhoWrapper>
                    </Container>
                </UISection>
            }
        </>

        
    )
}

export default HomeWho;