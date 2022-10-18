import styled from 'styled-components';

export const Label = styled.label`
    align-self: flex-start;
    margin-left: ${({ marginLeft }) => `${marginLeft}rem`};
    transform: ${({ trans }) =>
        (trans)
            ? ' transform: translate(1%,0%);'
            : 'translate(6%,302%)scale(86%);'
    };
    color:  var(--color-blanco);
    z-index: 2;
    transition: transform var(--transition-1);
`

export const Title = styled.h1`
    font-weight: 400;
    text-align: center;
    font-size: ${({ fontSize }) => `${fontSize}rem`};
    font-family: var(--font-principal);
`;