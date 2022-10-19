import UISection from "../UISection";
import { useWebsiteContext } from "../../store/websiteContent";

const HomeProducts = ()=> {

    const {productsContent} = useWebsiteContext();

    return (

       <>
        {
            productsContent &&

            <UISection id="products">


            </UISection>
        }
       </>
       
    )
}

export default HomeProducts;