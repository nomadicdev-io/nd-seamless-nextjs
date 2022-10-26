import Link from "next/link";
import { DefaultIconButton, ToggleButton } from "../Buttons";
import { StyledNav, StyledNavBox } from "../styles/Header.styles";
import { ReactSVG } from 'react-svg'
import { MobileView, BrowserView } from 'react-device-detect';
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion"

const HeaderComponent = ()=> {

    const [menuIsActive, setMenuIsActive] = useState(false)
    
    const navLinks = [
        {name: 'Home', link: '/', scroll: true},
        {name: 'About', link: '/#about', scroll: true},
        {name: 'Who We Are', link: '/#who-we-are', scroll: true},
        {name: 'Products', link: '/#products', scroll: true},
        {name: 'Services', link: '/#services', scroll: true},
        {name: 'Clients', link: '/#clients', scroll: true},
        {name: 'Contact Us', link: '/#contact', scroll: true}
    ]

    const toggleClick = ()=> {
        setMenuIsActive(!menuIsActive)
    }

    return (
        <StyledNavBox>

            <MobileView>
                <AnimatePresence>
                    { menuIsActive && <MobileMenu data={navLinks} clicked={toggleClick}/> }
                </AnimatePresence>
            </MobileView>

            <BrowserView>
                    <StyledNav>
                        <ul className="nav_list">
                        {
                            navLinks.map((item, index)=>  <li key={index} className="nav_item"><Link href={item.link} scroll={item.scroll}>{item.name}</Link></li>)
                        }
                        </ul>
                    </StyledNav>
            </BrowserView>

            <DefaultIconButton color={'whatsapp'}>
                <ReactSVG src="/whatsapp.svg" />
            </DefaultIconButton>

            <MobileView>
                <ToggleButton clicked={toggleClick} cstate={menuIsActive}/>
            </MobileView>
        
        </StyledNavBox> 
    )
}

export default HeaderComponent;