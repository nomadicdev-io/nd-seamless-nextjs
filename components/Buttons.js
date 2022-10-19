import { forwardRef, useState } from "react";
import { StyledAnchorButton, StyledButtonGroup, StyledIconButton, StyledToggleButton } from "./styles/Button.styles";
import { useRouter } from "next/router";

const IconButton = forwardRef((props, ref)=> {
    return (
        <StyledIconButton ref={ref} {...props} onClick={props.clicked}> 
            {props.children}
        </StyledIconButton>
    )
})


const ButtonGroup = ({children, align, justify, marginTop})=> {
    return (
        <StyledButtonGroup align={align} justify={justify} marginTop={marginTop}>
            {children}
        </StyledButtonGroup>
    )
}

const ToggleButton = ()=> {

    const [isActive, setActive] = useState(false)

    const toggleFunc = ()=> {
        setActive(!isActive)

        console.log(isActive)
    }

   return (
        <StyledToggleButton className={isActive ? 'active' : ''} onClick={toggleFunc}>
            <span></span>
        </StyledToggleButton>
    )
}

const AnchorButton = ({title, href, children})=> {

    const router = useRouter();

    return (
        <StyledAnchorButton href={href} onClick={()=> router.push(href)}>
            <span>{title}</span>
            {children}
        </StyledAnchorButton>
    )
}

export {IconButton, ToggleButton, AnchorButton, ButtonGroup};