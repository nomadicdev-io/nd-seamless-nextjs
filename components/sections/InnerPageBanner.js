import Link from "next/link";
import BannerBG from "../BannerBG";
import { StyledBannerWrapper } from "../styles/Banner.stlyles";
import { StyledInnerPageBanner } from "../styles/Common.styles";
import { motion } from "framer-motion";

const InnerPageBanner = ({title})=> {

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
        <StyledInnerPageBanner>
            <BannerBG overlay={true}/>

            <StyledBannerWrapper
                as={motion.div}
                initial="hidden"
                animate="visible"
                variants={bannerAnim}
                viewport={{ once: true }}
            >
                <div className="inner_content">
                    <motion.h1 variants={textAnim}><span>{title}</span></motion.h1>
                    <motion.ul variants={textAnim} className="breadcrumb_">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><div className="current">{title}</div></li>
                    </motion.ul>
                </div>
            </StyledBannerWrapper>

        </StyledInnerPageBanner>
    )
}

export default InnerPageBanner;