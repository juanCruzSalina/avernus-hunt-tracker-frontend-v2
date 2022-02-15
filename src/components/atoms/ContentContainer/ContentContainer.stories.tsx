import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import ContentContainer from './ContentContainer'

export default {
  title: 'Components/Atoms/Content Container',
  component: ContentContainer
} as ComponentMeta<typeof ContentContainer>;

const Template: ComponentStory<typeof ContentContainer> = (args) => {
  return (
    <ContentContainer {...args} >
      <div style={{'gridArea': 'Area1', 'backgroundColor': 'red'}}>Area 1</div>
      <div style={{'gridArea': 'Area2', 'backgroundColor': 'blue'}}>Area 2</div>
    </ContentContainer>
  )
}

export const Default = Template.bind({})
Default.args = {
  gridStructure: 'Area1 Area2',
  columnMeasures: '40% 60%'
}