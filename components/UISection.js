import { StyledSection } from "./styles/Common.styles";

const UISection = ({children, havbePaddingBottom, id})=> {
    return (
        <StyledSection id={id} havbePaddingBottom={havbePaddingBottom} >
            {children}
        </StyledSection>
    )
}

export default UISection;