import Image from "next/image";
import { StyledSectionBG } from "./styles/Common.styles";

const SectionBG = ({src})=> {
    return (
        <StyledSectionBG >
            <Image src={src} width="1920" height="1062" />
        </StyledSectionBG>
    )
}

export default SectionBG;