import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "react-feather";
import { StyledProductItem } from "./styles/Product.styles";
import { motion } from "framer-motion";

const ProductsItem = ({data})=> {

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
        <Link href={`/products/${data.id}`} >
            <StyledProductItem
                as={motion.a}
                variants={productItemVariant}
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
        </Link> 
    )
}

export default ProductsItem;