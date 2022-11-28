import styled, { css } from "styled-components";
import { AbBotaoProps } from "./";

export const Button = styled.button<AbBotaoProps>`
    background: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
    padding: 1rem 2rem;
    border: 2px solid #EB9B00;
    color: ${(props: AbBotaoProps) => props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
    font-size: 1.25rem;
    cursor: pointer;

    ${(props: AbBotaoProps) => props.tipo === 'primario'
        ? css`
            &:hover {
                background: #B87900;
                border: 2px solid #B87900;
            }
        `
        : css`
            &:hover {
                background: #FFF;
                border: 2px solid #B87900;
                color: #B87900;
            }
        `
    };


  
`;

