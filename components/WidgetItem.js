import Image from "next/image";
import { motion } from "framer-motion"
import { StyledWidgetItem } from "./styles/Common.styles";

const WidgetItem = ({data, delay})=> {

    const widgetScreen = {
        offscreen: { opacity: 0 },
        onscreen: {
            opacity: 1,
            transition: {
                delay: (delay + 1) * 0.3,
                staggerChildren: 0.1,
                when: "beforeChildren",
                delayChildren: 0.1,
            }
        }
    }

    const iconitem = {
        offscreen: { scale: 0 },
        onscreen: { 
            scale: 1, 
            transition: {
                duration: 0.5
            } 
        }
    }

    const textItem = {
        offscreen: { opacity: 0, y: 50},
        onscreen: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            } 
        }
    }

    return (
        <StyledWidgetItem
            as={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            variants={widgetScreen}
            viewport={{ once: true }}
        >
            <motion.div className="icon_" variants={iconitem}>
                <Image src={data.icon} width={256} height={256}/>
            </motion.div>
            <motion.div className="content_" variants={textItem}>
                <h4>{data.name}</h4>
                <p>{data.description}</p>
            </motion.div>
        </StyledWidgetItem>
    )
}

export default WidgetItem;