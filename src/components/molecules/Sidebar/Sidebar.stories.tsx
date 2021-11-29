import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'
import Sidebar from './Sidebar'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Components/Molecules/Sidebar',
  component: Sidebar,
  decorators: [(Story) => (
    <Provider store={store}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </Provider>
  )]
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Default = Template.bind({})
Default.args = {}