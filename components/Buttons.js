import { forwardRef } from "react";
import { StyledAnchorButton, StyledButtonGroup, StyledIconButton, StyledToggleButton } from "./styles/Button.styles";
import { useRouter } from "next/router";
import { motion } from "framer-motion"

const DefaultIconButton = ((props)=> {
    return (
        <StyledIconButton {...props} onClick={props.clicked}> 
            {props.children}
        </StyledIconButton>
    )
})

const IconButton = forwardRef((props, ref)=> {
    return (
        <StyledIconButton ref={ref} {...props}> 
            {props.children}
        </StyledIconButton>
    )
})


const ButtonGroup = ({children, align, justify, margintop = 0, animdelay})=> {
    return (
        <StyledButtonGroup
            as={motion.div}
            initial={{ opacity: 0, y: 50, scaleY: 1.5 }}
            whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
            viewport={{ once: true}}
            transition={{type: 'spring', duration: 1.2, delay: animdelay ? animdelay : 1}}
            align={align} 
            justify={justify} 
            margintop={margintop}
        >
            {children}
        </StyledButtonGroup>
    )
}

const ToggleButton = ({cstate, clicked})=> {

   return (
        <StyledToggleButton className={cstate ? 'active' : ''} onClick={clicked}>
            <span></span>
        </StyledToggleButton>
    )
}

export default function AnchorButton({title, href, children}){

    const router = useRouter();

    return (
        <StyledAnchorButton href={href} onClick={()=> router.push(href)}>
            <span>{title}</span>
            {children}
        </StyledAnchorButton>
    )
}

export {IconButton, ToggleButton, ButtonGroup, DefaultIconButton};

