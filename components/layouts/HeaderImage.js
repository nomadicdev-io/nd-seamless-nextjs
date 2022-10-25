import Image from "next/image";
import Link from "next/link";
import { StyledNavImage } from "../styles/Header.styles";

const HeaderImage = ({imageUrl})=> {
    return (
        <StyledNavImage>
            <Link href="/">
                <Image src="/logo.svg"  alt="Seamless" width={187} height={61}/>
            </Link>
        </StyledNavImage>
    )
}

export default HeaderImage;