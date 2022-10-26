import { StyledMobileMenu } from "../styles/Header.styles";
import Link from "next/link";
import { motion } from "framer-motion"

const openNav = {
    hidden: {
        scale: 0
     },
    visible: {
        scale: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2,
            delayChildren: 0.3,
        }
    }
}

const textAnim = {
    hidden: { opacity: 0, y: 70},
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 1,
        } 
    }
}

const MobileMenu = ({data, clicked})=> {
    return (
        <StyledMobileMenu
            as={motion.div}
            style={{ originX: 1, originY: 0 }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={openNav}
        >
            <ul className="nav_list">
                {
                    data.map((item, index)=>  
                        <li key={index} className="nav_item">
                        <Link href={item.link} scroll={item.scroll}>
                            <a onClick={clicked}>{item.name}</a>
                        </Link>
                        </li>)
                }
            </ul>
        </StyledMobileMenu>
    )
}

export default MobileMenu;