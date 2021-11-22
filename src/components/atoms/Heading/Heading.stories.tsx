import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Heading from './Heading'

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
  args: {
    children:
      'This is a heading'
  },
  argTypes: {
    children: { control: 'text' },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
      <div
        style={{
          backgroundColor: args.isLight ? '#333' : 'transparent',
          padding: '2rem',
        }}
      >
        <Heading {...args}/>
      </div>)

export const Default = Template.bind({});
Default.args = {}