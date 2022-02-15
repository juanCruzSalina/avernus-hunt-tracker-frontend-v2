import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import Logo from './Logo'

export default {
  title: 'Components/Atoms/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => {

  return(
    <div style={{height: '10rem', width: '12rem'}} >
      <Logo {...args}/>
    </div>
  )
}

export const Default = Template.bind({});
Default.args = {}