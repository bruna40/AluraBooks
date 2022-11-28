import React from 'react';
import { TagStyled } from './style';

export interface TagProps {
    texto: string;
}

export const Tag = ({texto}: TagProps) => {
    return (
        <TagStyled>
            {texto}
        </TagStyled>
    );
};