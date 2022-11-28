import { ComponentMeta } from '@storybook/react';
import React from 'react';
import { Card } from '../src/components/Card';


export default {
    title: 'Components/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

export const CardComponent = () => <Card>Card</Card>;