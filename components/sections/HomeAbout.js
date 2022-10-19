import Container from "../Container";
import TextArea from "../TextArea";
import UISection from "../UISection";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";
import { useWebsiteContext } from "../../store/websiteContent";
import { AnchorButton, ButtonGroup } from "../Buttons";
import { ArrowRight } from 'react-feather';

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
                    </Container>
                </UISection>
            }
        </>
    )
}

export default HomeAbout;