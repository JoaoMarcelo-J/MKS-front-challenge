import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body, #root{
        height: 100%;
    }
    :root{
        --brand-color: #0F52BA;
        --price-gray: #373737;
        --text-color: #2c2c2c;
        --hover-gray: #e0e0e0;
        --input-gray: #BFBFBF;
        --footer-gray: #EEE;
        --black: #000;
        --white: #fff;
    }
    
    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    body,input,button{
        font: 400 1rem "Montserrat", sans-serif;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`;
