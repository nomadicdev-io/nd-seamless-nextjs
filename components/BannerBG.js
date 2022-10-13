import { StyledBannerBG } from "./styles/Banner.stlyles"

const BannerBG = ()=> {
    return (
        <StyledBannerBG>
            <picture>
                <source srcSet="/banner_bg.png" />
                <img src="/banner_bg.png" alt="Seamless" />
            </picture>
        </StyledBannerBG>
    )
}

export default BannerBG;