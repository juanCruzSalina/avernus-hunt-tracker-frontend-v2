import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Button from './Button'

export default {
  title: 'Components/Atoms/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (<Button {...args}>Button</Button>)

export const Default = Template.bind({})
Default.args = {
  onClick: () => alert('this is a button')
}