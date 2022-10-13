import Link from "next/link";
import { IconButton, ToggleButton } from "../Buttons";
import { StyledNav, StyledNavBox } from "../styles/Header.styles";
import { Facebook } from 'react-feather';
import { ReactSVG } from 'react-svg'

const HeaderComponent = ()=> {

    const navLinks = [
        {name: 'Home', link: '/'},
        {name: 'About', link: '/about'},
        {name: 'Who We Are', link: '/who-we-are'},
        {name: 'Products', link: '/products'},
        {name: 'Services', link: '/services'},
        {name: 'Clients', link: '/clients'},
        {name: 'Contact Us', link: '/contact'}
    ]

    return (
        <StyledNavBox>
            <StyledNav>
                <ul className="nav_list">
                   {
                    navLinks.map((item, index)=>  <li key={index} className="nav_item"><Link href={item.link}>{item.name}</Link></li>)
                   }
                </ul>
            </StyledNav>
            <IconButton isWhatsapp={true}>
                <ReactSVG src="/whatsapp.svg" />
            </IconButton>
            {
                window.window < 1200 && <ToggleButton />
            }
        </StyledNavBox> 
    )
}

export default HeaderComponent;