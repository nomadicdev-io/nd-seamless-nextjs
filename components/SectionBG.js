import Image from "next/image";
import { StyledSectionBG } from "./styles/Common.styles";

const SectionBG = ({src})=> {
    return (
        <StyledSectionBG >
            <Image src={src} layout="fill" alt="Services"/>
        </StyledSectionBG>
    )
}

export default SectionBG;