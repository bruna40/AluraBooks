import React from 'react';
import { GrupoOpcoesStyled } from './style';

export interface GrupoOpcao {
    id: number;
    titulo: string;
    corpo: string;
    rodaPe: string;

}

export interface GrupoOpcoesProps {
    opcoes: GrupoOpcao[];
    valorPadrao?: GrupoOpcao | null;

}

export const GrupoOpcoes = ({ opcoes }: GrupoOpcoesProps) => {
    const [ opcaoSelecionada, setOpcaoSelecionada ] = React.useState<GrupoOpcao | null>(null);
    return (
        <>
            {opcoes.map((opcao) => (
                <GrupoOpcoesStyled
                    key={opcao.id}
                    onClick={() => setOpcaoSelecionada(opcaoSelecionada === opcao ? null : opcao)}
                    selecionado={opcaoSelecionada?.id === opcao.id}
                >
                <header> 
                    {opcao.titulo}
                </header>
                <div>
                    <strong>{opcao.corpo}</strong>
                </div>
                <footer>
                    {opcao.rodaPe}
                </footer>
            </GrupoOpcoesStyled>
            ))}
        </>
    );
};
