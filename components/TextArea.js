import { StyledTextArea } from "./styles/Common.styles";

const TextArea = ({children})=> {
    return (
        <StyledTextArea align="center">
            {children}
        </StyledTextArea>
    )
}

export default TextArea;