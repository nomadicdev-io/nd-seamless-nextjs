import { StyledSection } from "./styles/Common.styles";

const UISection = ({children, havbePaddingBottom, id, noPaddingTop})=> {
    return (
        <StyledSection id={id} havbePaddingBottom={havbePaddingBottom} noPaddingTop={noPaddingTop}>
            {children}
        </StyledSection>
    )
}

export default UISection;