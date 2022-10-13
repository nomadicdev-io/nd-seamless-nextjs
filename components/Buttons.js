import { useState } from "react";
import { StyledIconButton, StyledToggleButton } from "./styles/Button.styles";

const IconButton = ({children, isWhatsapp})=> {
    return (
        <StyledIconButton isWhatsapp={isWhatsapp}>
            {children}
        </StyledIconButton>
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

export {IconButton, ToggleButton};