import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NoEnumItems from './NoEnumItems';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

export default {
  title: 'Components/Molecules/No Enumerated Items',
  component: NoEnumItems,
  decorators: [
    (Story) =>
      <Provider store={store}>
        <Story />
      </Provider>
  ]
} as ComponentMeta<typeof NoEnumItems>;

const Template: ComponentStory<typeof NoEnumItems> = (args) => <NoEnumItems {...args}/>

export const Default = Template.bind({})
Default.args = {
  type: 'tier',
}