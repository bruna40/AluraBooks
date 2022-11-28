import React from 'react';
import { GrupoOpcoes, GrupoOpcoesProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Components/GrupoOpcoes',
    component: GrupoOpcoes,

} as ComponentMeta<typeof GrupoOpcoes>;

const Template: ComponentStory<typeof GrupoOpcoes> = (args) => <GrupoOpcoes  {...args}/>;

export const Padrao = Template.bind({});

Padrao.args = {
    opcoes: [{
        id: 1,
        titulo: 'E-book',
        corpo: 'R$ 0,00',
        rodaPe: '.pdf, .epub, .mob',
    }]
} as GrupoOpcoesProps;
