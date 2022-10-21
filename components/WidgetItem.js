import Image from "next/image";
import { StyledWidgetItem } from "./styles/Common.styles";

const WidgetItem = ({data})=> {
    return (
        <StyledWidgetItem>
            <div className="icon_">
                <Image src={data.icon} width={256} height={256}/>
            </div>
            <div className="content_">
                <h4>{data.name}</h4>
                <p>{data.description}</p>
            </div>
        </StyledWidgetItem>
    )
}

export default WidgetItem;