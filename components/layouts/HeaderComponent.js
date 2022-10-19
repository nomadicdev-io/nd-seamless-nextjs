import Link from "next/link";
import { IconButton, ToggleButton } from "../Buttons";
import { StyledNav, StyledNavBox } from "../styles/Header.styles";
import { ReactSVG } from 'react-svg'
import { isMobile } from 'react-device-detect';

const HeaderComponent = ()=> {

    
    const navLinks = [
        {name: 'Home', link: '/', scroll: true},
        {name: 'About', link: '/#about', scroll: true},
        {name: 'Who We Are', link: '/#who-we-are', scroll: true},
        {name: 'Products', link: '/#products', scroll: true},
        {name: 'Services', link: '/#services', scroll: true},
        {name: 'Clients', link: '/#clients', scroll: true},
        {name: 'Contact Us', link: '/#contact', scroll: true}
    ]

    return (
        <StyledNavBox>
            <StyledNav>
                <ul className="nav_list">
                   {
                    navLinks.map((item, index)=>  <li key={index} className="nav_item"><Link href={item.link} scroll={item.scroll}>{item.name}</Link></li>)
                   }
                </ul>
            </StyledNav>
            <IconButton color={'whatsapp'}>
                <ReactSVG src="/whatsapp.svg" />
            </IconButton>
            {
                isMobile && <ToggleButton />
            }
        </StyledNavBox> 
    )
}

export default HeaderComponent;