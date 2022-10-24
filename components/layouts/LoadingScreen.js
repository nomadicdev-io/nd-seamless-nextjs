import Image from "next/image";
import { StyledLoadingScreen } from "../styles/Common.styles";

const LoadingScreen = ()=> {
    return (
        <StyledLoadingScreen>
            <div className="image_box">
                <Image src="/logo.svg" width="200" height="120" />
            </div>
        </StyledLoadingScreen>
    )
}

export default LoadingScreen;