import Image from "next/image";
import { StytledClientItem } from "./styles/Client.styles";
import { motion } from "framer-motion";
import Link from "next/link";


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

        <Link href={data.link} >

            <StytledClientItem 
                as={motion.a}
                variants={clientItemVariant}
                title={data.name} 
                target="_blank" 
                rel="noopener noreferrer"
            >

                <Image src={data.imageUrl} layout="fill" objectFit="contain" objectPosition="center" alt={data.name}/>
            </StytledClientItem>

        </Link>
    )
}

export default ClientItem;