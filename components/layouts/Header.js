import { useEffect, useState } from "react";
import { StyledHeader, StyledHeaderWrapper } from "../styles/Header.styles";
import HeaderComponent from "./HeaderComponent";
import HeaderImage from "./HeaderImage";

const Header = ({isScrolled})=> {

    return (
        <StyledHeader isScrolled={isScrolled}>
            <StyledHeaderWrapper>
                <HeaderImage />
                <HeaderComponent />
            </StyledHeaderWrapper>
        </StyledHeader>
    )
}

export default Header;