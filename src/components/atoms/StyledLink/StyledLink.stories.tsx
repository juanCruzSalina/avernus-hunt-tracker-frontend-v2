import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { BrowserRouter } from 'react-router-dom';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import StyledLink from './StyledLink'
import theme from '../../../theme/theme';

export default {
  title: 'Components/Atoms/Link',
  component: StyledLink,
  decorators: [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )]
} as ComponentMeta<typeof StyledLink>;

const Template: ComponentStory<typeof StyledLink> = (args) => <StyledLink {...args} />

export const Default = Template.bind({})
Default.args = {
  icon: faHome,
  color: theme.colors.dark,
  hover: theme.colors['grey-600'],
  path: '/home',
  text: 'Home'
}

export const NoIcon = Template.bind({})
NoIcon.args ={
  color: theme.colors.dark,
  hover: theme.colors['grey-600'],
  path: '/home',
  text: 'Home'
}
