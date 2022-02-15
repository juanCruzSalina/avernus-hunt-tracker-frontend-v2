import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Hero from './Hero';

export default {
  title: 'Components/Molecules/Hero',
  component: Hero
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero />

export const Default = Template.bind({})
Default.args = {}