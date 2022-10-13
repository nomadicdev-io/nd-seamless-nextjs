import styled from "styled-components";

const StyledSection = styled.section`
    position: relative;
    display: block;
    width: 100%;
    overflow: hidden;
    padding-top: 10vh;
`;

const StyledTitleWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: ${({align})=> align ? align : 'flex-start'};
    justify-content: ${({align})=> align ? align : 'flex-start'};
    margin-bottom: 1em;
`;

const StyledSectionTitle = styled.h2`
    position: relative;
    display: block;
    margin: 0;
    font-size: calc(var(--font-size) * 3.5);
`;

export {StyledSection, StyledSectionTitle, StyledTitleWrapper};