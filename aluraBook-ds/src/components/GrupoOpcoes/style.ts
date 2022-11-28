import styled from "styled-components";


export const GrupoOpcoesStyled = styled.section<{ selecionado: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: ${(props) => props.selecionado ? 'linear-gradient(97.54deg, #002F52 34.49%, #326589 165.37%)' : '#FFF'};
    width: 12.125rem;
    height: 5.5rem;
    border: 1px solid;
    border-color: ${(props) => props.selecionado ? '#002F52' : '#EB9B00'};
    border-radius: 0.5rem;
    margin: 0.5rem;
    font-family: sans-serif;
    cursor: pointer;

    header {
        color: ${(props) => props.selecionado ? '#FFF' : '#EB9B00'};
        font-size: 0.75rem;
        font-weight: 400;
    }
    strong {
        color: ${(props) => props.selecionado ? '#FFF' : '#EB9B00'};
        font-size: 1rem;
    }
    footer {
        color: ${(props) => props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};
        font-size: 0.75rem;
        font-weight: 400;
    }
`;