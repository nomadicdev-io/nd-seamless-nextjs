import Image from "next/image";
import { StyledServiceItem } from "./styles/Services.styles";
import { motion } from "framer-motion";

const ServiceItem = ({data})=> {
    
    const serviceItemVariant = {
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
        <StyledServiceItem
            as={motion.div}
            variants={serviceItemVariant}
        >
            <div className="content_">
                <h4>{data.name}</h4>
                <p>Services</p>
            </div>
            <div className="image_">
                <Image 
                    src={data.imageUrl} 
                    layout="fill"
                    alt={data.name}
                />
            </div>
        </StyledServiceItem>
    )
}

export default ServiceItem;