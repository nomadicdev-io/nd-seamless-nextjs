import { useEffect, useState } from "react";
import { StyledHeader, StyledHeaderWrapper } from "../styles/Header.styles";
import HeaderComponent from "./HeaderComponent";
import HeaderImage from "./HeaderImage";

const Header = ()=> {

    const [isScroll, setIsScroll] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
           if(window.scrollY > 5) {
            setIsScroll(true)
           }else{
            setIsScroll(false)
           }
        })
    }, [])

    return (
        <StyledHeader isScrolled={isScroll}>
            <StyledHeaderWrapper>
                <HeaderImage />
                <HeaderComponent />
            </StyledHeaderWrapper>
        </StyledHeader>
    )
}

export default Header;