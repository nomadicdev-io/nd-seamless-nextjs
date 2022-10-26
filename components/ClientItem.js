import Image from "next/image";
import { StytledClientItem } from "./styles/Client.styles";
import { motion } from "framer-motion";


const ClientItem = ({data})=> {

    const clientItemVariant = {
        offscreen: {opacity: 0, translateY: '100%'},
        onscreen: {
            opacity: 1,
            translateY: 0,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <StytledClientItem 
        as={motion.a}
        variants={clientItemVariant}
        href={data.link} 
        title={data.name} 
        target="_blank">
            <Image src={data.imageUrl} layout="fill" objectFit="contain" objectPosition="center" alt={data.name}/>
        </StytledClientItem>
    )
}

export default ClientItem;