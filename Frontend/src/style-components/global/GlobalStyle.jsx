import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
      /** Timaño grafias */
    --step-5: clamp(0.91rem, calc(0.89rem + 0.1vw), 0.96rem);
    --step-4: clamp(1.09rem, calc(1.05rem + 0.21vw), 1.2rem);
    --step-3: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.5rem);
    --step-2: clamp(1.58rem, calc(1.46rem + 0.59vw), 1.88rem);
    --step-1: clamp(1.89rem, calc(1.71rem + 0.89vw), 2.34rem);
    --step-0: clamp(2.27rem, calc(2.01rem + 1.29vw), 2.93rem);
    --step-0-1: clamp(2.72rem, calc(2.36rem + 1.83vw), 3.66rem);
    --step-0-2: clamp(3.27rem, calc(2.75rem + 2.56vw), 4.58rem);

    /** Colores */
    --color-primario: #1f2021;
    --color-secundario: #b87004;
    --color-blanco: #ffffff;
    --color-gris: #c7ced4;
    --color-crema: #d1973e;
    --color-negro: #000000a3;

      /** Tipo grafias */
      --font-principal: "Roboto Slab", serif;
      --font-secundario: "Maven Pro", sans-serif;
      /** Transiscoines*/
      --transition-1: .5s ease-out;
      --transition-2: 1s ease-in;
  }

  html {
      box-sizing: border-box;
  }

  body {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: 16px;
    min-block-size: 100vh;
    background-color: var(--color-primario);
    color: var(--color-blanco);
    font-family: var(--font-secundario);
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

`


export default GlobalStyle;
