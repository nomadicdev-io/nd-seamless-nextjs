import BannerBG from "../BannerBG"
import { StyledBannerSection, StyledBannerWrapper } from "../styles/Banner.stlyles"
import { useWebsiteContext } from "../../store/websiteContent"
import AnchorButton, { ButtonGroup } from "../Buttons";
import { ArrowRight } from "react-feather";
import Image from "next/image";
import { motion } from "framer-motion"



const HomeBanner = ()=> {

    const {bannerContent} = useWebsiteContext();

    
    const bannerAnim = {
        hidden: { },
        visible: {
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    }

    const textAnim = {
        hidden: { opacity: 0, y: 70},
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 1,
            } 
        }
    }

    return (
        <StyledBannerSection>
            <BannerBG />

            <StyledBannerWrapper>

                <motion.div 
                initial="hidden"
                animate="visible"
                variants={bannerAnim}
                className="content_"
                >

                    <div className="inner_">

                        <motion.h1
                             variants={textAnim}
                        ><span>{bannerContent.title}</span>
                        </motion.h1>

                        <motion.h4
                            variants={textAnim}
                        >
                            {bannerContent.subtitle}
                        </motion.h4>

                        <motion.p
                            variants={textAnim}
                        >
                            {bannerContent.description}
                        </motion.p>
                        
                        <ButtonGroup justify={'flex-start'}>
                            <AnchorButton title="Read More"  href="/">
                                <ArrowRight />
                            </AnchorButton>
                        </ButtonGroup>

                    </div>

                    <div className="ft_clients">
                        <motion.div 
                            variants={textAnim}
                            className="title_"
                        >
                            Featured Clients
                        </motion.div>
                        <motion.div 
                            variants={textAnim}
                            className="image_"
                        >
                            <Image src="/ft_clients.png" layout="fill" alt="Seamless"/>
                        </motion.div>
                    </div>
                </motion.div>

            </StyledBannerWrapper>
        </StyledBannerSection>
    )
}

export default HomeBanner