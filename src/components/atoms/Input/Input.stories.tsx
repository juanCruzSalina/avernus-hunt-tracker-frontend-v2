import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Input from './Input'

import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Components/Atoms/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'input text',
  icon: faSearch
}

export const NoIcon = Template.bind({})
NoIcon.args = {
  placeholder: 'input text',
}