import React from 'react';
import { Button } from './style';

export interface AbBotaoProps {
    texto?: string;
    tipo?: 'primario' | 'secundario';
    onClick?: () => void;
}

export const AbBotao = ({texto, tipo = 'primario', onClick}:AbBotaoProps) => {
  return (
    <Button
      onClick={onClick}
      tipo={tipo}
    >
      { texto }
    </Button>
  );
};