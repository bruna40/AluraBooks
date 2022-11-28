import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Tag, TagProps } from '../src/components/Tag';

export default {
    title: 'Components/Tag',
    component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const TagComponent = Template.bind({});

TagComponent.args = {
    texto: 'Tag',
} as TagProps;