import { motion } from "framer-motion"
import { StyledTextArea } from "./styles/Common.styles";

const TextArea = ({children, align, nopadding, animdelay})=> {
    return (
        <StyledTextArea 
        as={motion.div}
        initial={{ opacity: 0, y: 50, scaleY: 1.5 }}
        whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
        viewport={{ once: true}}
        transition={{type: 'spring', duration: 1.2, delay: animdelay ? animdelay : 0.8}}
        align={align} 
        nopadding={nopadding}
        >
            {children}
        </StyledTextArea>
    )
}

export default TextArea;