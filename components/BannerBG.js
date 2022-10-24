import { StyledBannerBG } from "./styles/Banner.stlyles"
import { motion } from "framer-motion"

const BannerBG = ()=> {

    const bgAnim = {
        hidden: { opacity: 0, scale: 1.5},
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 2,
                delay: 0,
                default: { ease: 'easeIn' }
            } 
        }
    }

    return (
        <StyledBannerBG
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={bgAnim}
        >
            <motion.picture>
                <source srcSet="/banner_bg.png" />
                <img src="/banner_bg.png" alt="Seamless" />
            </motion.picture>
        </StyledBannerBG>
    )
}

export default BannerBG;