import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

export default {
  title: 'Components/Molecules/Accordion',
  component: Accordion,
  decorators: [(Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )]

} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const Default = Template.bind({})
Default.args={
  type: 'tier'
}