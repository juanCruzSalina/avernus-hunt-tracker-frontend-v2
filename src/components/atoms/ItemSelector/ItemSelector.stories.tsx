import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import ItemSelector from './ItemSelector'

export default {
  title: 'Components/Atoms/ItemSelector',
  component: ItemSelector
} as ComponentMeta<typeof ItemSelector>;

const Template: ComponentStory<typeof ItemSelector> = (args) => <ItemSelector {...args}/>

export const Default = Template.bind({})
Default.args = {
  value: 'ExampleItem',
  // onSelect: () => alert('Item Selected'),
  // onDeselect: () => alert('item Deselected')
}

export const WithTier = Template.bind({})
WithTier.args = {
  tier: true,
  value: '1',
  // onSelect: () => alert('Item Selected'),
  // onDeselect: () => alert('item Deselected')
}