import Image from "next/image";
import { StyledSkeletonLoader } from "./styles/Common.styles";
import { StyledServiceItem } from "./styles/Services.styles";


const ServiceItem = ({data})=> {
    

    return (
        <StyledServiceItem>
            <div className="content_">
                <h4>{data.name}</h4>
                <p>Services</p>
            </div>
            <div className="image_">
                <Image 
                    src={data.imageUrl} 
                    layout="fill"
                />
            </div>
        </StyledServiceItem>
    )
}

export default ServiceItem;