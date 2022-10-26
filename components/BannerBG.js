import { StyledBannerBG } from "./styles/Banner.stlyles"
import { motion } from "framer-motion"
import Image from "next/image";


const BannerBG = ()=> {
    
    const BannerbgAnim = {
        hidden: { opacity: 0, scale: 1.25},
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 1.5,
                delay: 0,
            } 
        }
    }

    return (
        <StyledBannerBG>
            <motion.div 
            variants={BannerbgAnim}
            initial="hidden"
            animate="visible"
            className="image_placeholder">
                <Image layout="fill" src="/banner_bg.png" alt="Seamless" />
            </motion.div>
        </StyledBannerBG>
    )
}

export default BannerBG;