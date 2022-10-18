import styled, { css } from 'styled-components';

const Flex = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerForm = styled.div`
    ${Flex};
    block-size: 100vh;
`

export const Form = styled.form`
    ${Flex};
    flex-direction: column;
    gap: 24px;
    min-inline-size: 500px;
    block-size: 500px;
    background-color: var(--color-negro);
    border-radius: 6px;

    input:not(input[type="submit"]){

        inline-size: 78%;
        padding: .9rem;
        z-index: 0;
        border: none;
        border-radius: 5px;
        color: var(--color-blanco);
        background-color: #d1973ee0;
    }
`

export const Submit = styled.input`

    margin-block-start: 1.5rem;
    font-size: 1.1rem;
    padding: .8em 6em;
    font-family: var(--font-principal);
    background-color: transparent;
    border: 2px solid var(--color-crema);
    color: var(--color-blanco);
    border-radius: 8px;
    transition: background-color var(--transition-2);
   &:hover{
    background-color: var(--color-crema);
   } 
`