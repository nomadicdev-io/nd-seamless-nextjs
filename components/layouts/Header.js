import { StyledHeader, StyledHeaderWrapper, StyledNavImage } from "../styles/Header.styles";
import HeaderComponent from "./HeaderComponent";
import HeaderImage from "./HeaderImage";

const Header = ()=> {
    return (
        <StyledHeader>
            <StyledHeaderWrapper>
                <HeaderImage />
                <HeaderComponent />
            </StyledHeaderWrapper>
        </StyledHeader>
    )
}

export default Header;