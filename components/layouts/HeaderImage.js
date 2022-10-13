import Image from "next/image";
import Link from "next/link";
import { StyledNavImage } from "../styles/Header.styles";

const HeaderImage = ({imageUrl})=> {
    return (
        <StyledNavImage>
            <Link href="/">
                <img src="/logo.svg" alt="Seamless"/>
            </Link>
        </StyledNavImage>
    )
}

export default HeaderImage;