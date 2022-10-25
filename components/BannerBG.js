import { StyledBannerBG } from "./styles/Banner.stlyles"
import { motion } from "framer-motion"
import Image from "next/image";

const BannerBG = ()=> {

    const bgAnim = {
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
        <StyledBannerBG >
            <Image layout="fill" src="/banner_bg.png" alt="Seamless" />
        </StyledBannerBG>
    )
}

export default BannerBG;