import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react'
import EnumItems from './EnumItems';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';


export default {
  title:'Components/Molecules/Enumerated Items',
  component: EnumItems,
  decorators: [
    (Story) =>
    <Provider store={store}>
      <Story />
    </Provider>
  ]
} as ComponentMeta<typeof EnumItems>;

const Template: ComponentStory<typeof EnumItems> = (args) => <EnumItems {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'items',
  itemTier: '3',
}
