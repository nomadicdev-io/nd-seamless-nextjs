import { StyledTextArea } from "./styles/Common.styles";

const TextArea = ({children, align, noPadding})=> {
    return (
        <StyledTextArea align={align} noPadding={noPadding}>
            {children}
        </StyledTextArea>
    )
}

export default TextArea;