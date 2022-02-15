import React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LoadingScreen from './LoadingScreen';

export default {
  title: 'Components/Molecules/Loading Screen',
  component: LoadingScreen
} as ComponentMeta<typeof LoadingScreen>

const Template: ComponentStory<typeof LoadingScreen> = (args) => <LoadingScreen {...args} />


export const Default = Template.bind({})
Default.args = {
  type: 'login'
}