import styled from "styled-components"

export default function Header(){

    return(
        <StyledHeader>
            <h1>Free Feedback Form</h1>
        </StyledHeader>
    )
}

const StyledHeader=styled.header`
font-family: 'Bungee Outline';
font-size: 1.5rem;
`;