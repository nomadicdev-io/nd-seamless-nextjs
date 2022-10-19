import Link from "next/link";
import Container from "../Container";
import { StyledFooterWrapper } from "../styles/Common.styles";

const Footer = ()=> {

    let date = new Date().getFullYear();

    return (
        <footer>
            <Container>
                <StyledFooterWrapper>
                    <ul>
                        <li><Link href="/">FAQ</Link></li>
                        <li><Link href="/">Terms & Conditions</Link></li>
                        <li><Link href="/">Privacy Policy</Link></li>
                    </ul>
                    <p>All rights reserved - Seamless Oilfield Equipments © {date} </p>
                </StyledFooterWrapper>
            </Container>
        </footer>
    )
}

export default Footer;