import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Topbar from './Topbar';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/Organisms/Topbar',
  component: Topbar,
  decorators: [(Story) =>
    <Provider store={store}>
      <BrowserRouter>
        <Story/>
      </BrowserRouter>
    </Provider>
  ]
} as ComponentMeta<typeof Topbar>

const Template: ComponentStory<typeof Topbar> = (args) => <Topbar {...args} />
export const Default = Template.bind({})
Default.args = {}