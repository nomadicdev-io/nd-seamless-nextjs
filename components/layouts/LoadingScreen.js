import Image from "next/image";
import { StyledLoadingScreen } from "../styles/Common.styles";
import { motion } from "framer-motion"


const LoadingScreen = ({loadingstate})=> {
    return (
        <StyledLoadingScreen>
            <motion.div 
                initial={{ opacity: 0, scale: 0.5}}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="image_box">
                <Image src="/logo.svg" width="200" height="120" alt="Seamless"/>
            </motion.div>
        </StyledLoadingScreen>
    )
}

export default LoadingScreen;