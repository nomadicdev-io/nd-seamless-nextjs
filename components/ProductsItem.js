import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "react-feather";
import { StyledProductItem } from "./styles/Product.styles";
import { motion } from "framer-motion";

const ProductsItem = ({data, itemClicked})=> {

    const productItemVariant = {
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
            <StyledProductItem
                as={motion.div}
                variants={productItemVariant}
                onClick={itemClicked}
            >
                <div className="image_">
                    <Image 
                        src={data.imageUrl} 
                        layout="fill" 
                        alt={data.name}
                    />
                </div>

                <div className="content_">
                    <div className="title_">
                        <h4>{data.name}</h4>
                        <p>{data.type}</p>
                    </div>
                    <div className="arrow_">
                        <ArrowRightCircle color="#fff"/>
                    </div>
                </div>
            </StyledProductItem>

    )
}

export default ProductsItem;