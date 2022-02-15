import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import HomeSlider from './HomeSlider';

export default {
  title: 'Components/Organisms/Home Slider',
  component: HomeSlider,
} as ComponentMeta<typeof HomeSlider>

const Template: ComponentStory<typeof HomeSlider> = (args) => <HomeSlider {...args}/>

export const Default = Template.bind({})
Default.args = {}