import { ReactSVG } from "react-svg";
import { StyledQualityWrapper } from "./styles/Client.styles";

const ClientsQuality = ({data })=> {
    return (
        <StyledQualityWrapper>
            <div className="icon_">
                <ReactSVG src="/iso.svg" />
            </div>
            <div className="content_">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </StyledQualityWrapper>
    )
}

export default ClientsQuality;