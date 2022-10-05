import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

    :root{
        --colir-principal: #fff;
        --color-segundario : #fff;
        --color-gris:#fff;
        --color-crema : #fff; 
    }

    html{
        box-sizing: border-box;
    }
    body{
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
    *,::after,::before{

        box-sizing: inherit;
    }
`;

export default GlobalStyle;
