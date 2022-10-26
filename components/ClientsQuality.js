import { ReactSVG } from "react-svg";
import { StyledQualityWrapper } from "./styles/Client.styles";
import { motion } from "framer-motion";

const ClientsQuality = ({data })=> {

    const qualityAnim = {
        offscreen: {opacity: 0, y: 100},
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.6,
                duration: 0.8,
                staggerChildren: 0.1,
                when: "beforeChildren",
                delayChildren: 0.2,
                ease: [0.23, 0.48, 0.26, 0.94],
            }
        }
    }

    const scaleAnim = {
        offscreen: {scale: 0},
        onscreen: {
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.23, 0.48, 0.26, 0.94],
            }
        }
    }

    const transformAnim = {
        offscreen: {opacity: 0, y: 50},
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.23, 0.48, 0.26, 0.94],
            }
        }
    }

    return (
        <StyledQualityWrapper
            as={motion.div}
            variants={qualityAnim}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <motion.div 
            variants={scaleAnim}
            className="icon_">
                <ReactSVG src="/iso.svg" />
            </motion.div>
            <div className="content_">
                <motion.h4
                variants={transformAnim}
                >{data.title}</motion.h4>
                <motion.p
                variants={transformAnim}
                >{data.description}</motion.p>
            </div>
        </StyledQualityWrapper>
    )
}

export default ClientsQuality;