import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Filter from './Filter';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';



export default {
  title: 'Components/Organisms/Filter',
  component: Filter,
  decorators: [
    (Story) =>
    <Provider store={store}>
      <Story />
    </Provider>
  ]
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args}/>

export const Default = Template.bind({})
Default.args = {}