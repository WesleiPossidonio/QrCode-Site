import styled from "styled-components";

export const ContainerContent = styled.main`
max-width: 90rem;
height: calc(100vh - 10rem);
margin: 5rem auto;

border-radius: 6px;
display: flex;
flex-direction: column;
justify-content: center;
background: ${({theme}) => theme.colors["base-backgound"]};

header {
    margin: -7rem 0 5rem 9rem ;
}

@media (max-width: 1500px) {
    margin: 5rem 5%;
}

@media (max-width: 816px) {
     header {
    margin: -1rem 0px 1.5rem 2rem;
    }

}

@media (max-width: 375px) {
    height: calc(100vh - 2rem);
}

`

export const ContainerQrcode = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
flex-wrap: wrap;

> svg {
    width: min(20.3125rem, 70vw);
    height: 20.3125rem;
    box-shadow: 16px 18px 9px -3px rgba(0,0,0,0.1);
}
`

export const ContainerContentQrCode = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;

@media (max-width: 816px) {
    margin-top: 4rem;
}

@media (max-width: 425px) {
    margin-top: 1.5rem;
}

`

export const TextTitle = styled.p`
font-style: normal;
font-weight: 400;
font-size: ${({theme}) => theme.textSizes.text};
line-height: 2.4375rem;

color: ${({theme}) => theme.colors["text-color"]};
`

export const Title = styled.h1`
font-style: normal;
font-weight: 500;
font-size: ${({theme}) => theme.textSizes.title};
line-height: min(6rem, 12vw);

color: ${({theme}) => theme.colors["title-color"]};
`

export const SubTitle = styled.h3`
font-style: normal;
font-weight: 400;
font-size: ${({theme}) => theme.textSizes.subTitle};
line-height: 2.5rem;
margin-bottom: 2rem;

color: ${({theme}) => theme.colors["subTitle-color"]};
`

export const Input = styled.input`
width: 90%;
padding: 0.8rem;
border-radius: 6px;
border: 1px solid ${({theme}) => theme.colors["text-color"]};
font-size: ${({theme}) => theme.textSizes.textInput};
margin-bottom: 0.8rem;

&::placeholder {
    font-size:1rem;
}
`

export const DowloadQrcode = styled.a`
width: 11.25rem;
min-height: 100%;
height: 2.8125rem;

display: flex;
align-items: center;
justify-content: center;

padding: 0.7rem;
border: 1px solid ${({theme}) => theme.colors["background-page"]};
border-radius: 3px;
background: ${({theme}) => theme.colors["background-page"]};

font-style: normal;
font-weight: 500;
font-size: ${({theme}) => theme.textSizes.textButton};
line-height: 1.3125rem;
text-decoration: none;
color: #FFF;
`