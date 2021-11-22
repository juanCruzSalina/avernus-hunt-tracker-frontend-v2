import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Avatar from './Avatar'

export default {
  title: 'Components/Atoms/Avatar',
  component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args}/>

export const Default = Template.bind({});
Default.args = {}