import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pagination from './Pagination';

export default {
  title: 'Components/Molecules/Pagination',
  component: Pagination
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />

export const Default = Template.bind({})
Default.args = {
  totalPages: 10,
  currentPage: 1
}