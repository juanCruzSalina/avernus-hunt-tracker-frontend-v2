import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';

export default {
  title: 'Components/Molecules/Accordion',
  component: Accordion
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.args={
  title: 'Example',
  options: ['Option A', 'Option B', 'Option C']
}