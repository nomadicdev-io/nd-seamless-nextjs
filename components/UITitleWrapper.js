import { StyledTitleWrapper } from "./styles/Common.styles";

const UITitleWrapper = ({children, align, justify})=> {
    return (
        <StyledTitleWrapper align={align} justify={justify}>
            {children}
        </StyledTitleWrapper>
    )
}

export default UITitleWrapper;