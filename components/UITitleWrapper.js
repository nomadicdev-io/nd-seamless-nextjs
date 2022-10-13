import { StyledTitleWrapper } from "./styles/Common.styles";

const UITitleWrapper = ({children, align})=> {
    return (
        <StyledTitleWrapper align={align}>
            {children}
        </StyledTitleWrapper>
    )
}

export default UITitleWrapper;