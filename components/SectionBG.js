import Image from "next/image";
import { StyledSectionBG } from "./styles/Common.styles";

const SectionBG = ({src})=> {
    return (
        <StyledSectionBG >
            <Image src={src} layout="fill" />
        </StyledSectionBG>
    )
}

export default SectionBG;