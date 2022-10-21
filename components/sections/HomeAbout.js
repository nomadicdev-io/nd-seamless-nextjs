import Container from "../Container";
import TextArea from "../TextArea";
import UISection from "../UISection";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import { useWebsiteContext } from "../../store/websiteContent";
import { AnchorButton, ButtonGroup } from "../Buttons";
import { ArrowRight } from 'react-feather';
import { StyledAboutImage, StyledAboutWidget } from "../styles/Common.styles";
import WidgetItem from "../WidgetItem";
import Image from "next/image";

const HomeAbout = ()=> {

    const {abooutContent} = useWebsiteContext();

    return (
        <>
            {
                abooutContent &&

                <UISection id="about">
                    <Container>
                        <UITitleWrapper align={'center'}>
                            <UITitle title={abooutContent.title} />
                        </UITitleWrapper>

                        <TextArea>
                            <p>{abooutContent.shortDescription}</p>
                        </TextArea>

                        <ButtonGroup align="center" justif="center" >
                            <AnchorButton title="Read More"  href="/about">
                                <ArrowRight />
                            </AnchorButton>
                        </ButtonGroup>

                        <StyledAboutWidget>
                            {
                                abooutContent.widget.map((item)=> <WidgetItem data={item}  key={item.id}/>)
                            }
                        </StyledAboutWidget>

                        
                    </Container>

                    <StyledAboutImage>
                        <div className="image_">
                            <Image src="/about-img-03.jpg" layout="fill" />
                        </div>

                        <div className="image_">
                            <Image src="/about-img-02.jpg" layout="fill" />
                        </div>

                        <div className="image_">
                            <Image src="/about-img-01.jpg" layout="fill" />
                        </div>
                    </StyledAboutImage>

                </UISection>
            }
        </>
    )
}

export default HomeAbout;