import Container from "../Container";
import UISection from "../UISection";
import UITitle from "../UITitle";
import UITitleWrapper from "../UITitleWrapper";

const HomeAbout = ()=> {
    return (
        <UISection>
            <Container>
                <UITitleWrapper align={'center'}>
                    <UITitle title="About Seamless" />
                </UITitleWrapper>
            </Container>
        </UISection>
    )
}

export default HomeAbout;