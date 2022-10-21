import BannerBG from "../BannerBG"
import { StyledBannerSection, StyledBannerWrapper } from "../styles/Banner.stlyles"
import { useWebsiteContext } from "../../store/websiteContent"
import { AnchorButton, ButtonGroup } from "../Buttons";
import { ArrowRight } from "react-feather";
import Image from "next/image";

const HomeBanner = ()=> {

    const {bannerContent} = useWebsiteContext();

    return (
        <StyledBannerSection>
            <BannerBG />
            <StyledBannerWrapper>

                <div className="content_">
                    <div className="inner_">
                        <h1><span>{bannerContent.title}</span></h1>
                        <h4>{bannerContent.subtitle}</h4>
                        <p>{bannerContent.description}</p>
                        <ButtonGroup justify={'flex-start'}>
                            <AnchorButton title="Read More"  href="/">
                                <ArrowRight />
                            </AnchorButton>
                        </ButtonGroup>
                    </div>
                    <div className="ft_clients">
                        <div className="title_">Featured Clients</div>
                        <div className="image_">
                            <Image src="/ft_clients.png" layout="fill"/>
                        </div>
                    </div>
                </div>

            </StyledBannerWrapper>
        </StyledBannerSection>
    )
}

export default HomeBanner