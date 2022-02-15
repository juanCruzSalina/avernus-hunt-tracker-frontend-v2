import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Table from './Table'
import { Provider } from 'react-redux'
import { store } from '../../../app/store'

export default {
  title: 'Components/Molecules/Table',
  component: Table,
  decorators: [(Story) => (
    <Provider store={store}>
      <Story />
    </Provider>)]
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'donation',
  items: [
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item1',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item2',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item3',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item4',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item5',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item6',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item7',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item8',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item9',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item10',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
    {
      date: 'date',
      tier: '2',
      type: 'Lure',
      item: 'item',
      amount: 3,
      donator: ['donater']
    },
  ]
}