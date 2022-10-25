import Image from "next/image";
import Link from "next/link";
import { ArrowRightCircle } from "react-feather";
import { StyledProductItem } from "./styles/Product.styles";

const ProductsItem = ({data})=> {
    return (
        <Link href={`/${data.id}`} >
            <StyledProductItem>
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