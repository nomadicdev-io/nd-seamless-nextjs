import { motion } from "framer-motion"
import { StyledSectionTitle } from "./styles/Common.styles";

const UITitle = ({title, animdelay})=> {
    return (
        <StyledSectionTitle
            as={motion.h2}
            initial={{ opacity: 0, y: 50, scaleY: 1.5 }}
            whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
            viewport={{ once: true}}
            transition={{type: 'spring', duration: 1.2, delay: animdelay ? animdelay : 0.6}}
        >
             <span>{title}</span>
        </StyledSectionTitle>
    )
}

export default UITitle;