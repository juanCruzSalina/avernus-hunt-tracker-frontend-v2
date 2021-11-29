import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import GlobalStructure from './GlobalStructure'

export default {
  title: 'Components/Atoms/Global Structure',
  component: GlobalStructure
} as ComponentMeta<typeof GlobalStructure>;

const Template: ComponentStory<typeof GlobalStructure> = (args) => (
  <GlobalStructure>
    <div style={ {gridArea: 'sidebar', backgroundColor: 'black', color:'white'} } > sidebar </div>
    <div style={ {gridArea: 'topbar', backgroundColor: 'brown', color:'white'} } > topbar </div>
    <div style={ {gridArea: 'content', backgroundColor: 'darkblue', color:'white'} } > content </div>
  </GlobalStructure>
)

export const Default = Template.bind({})
Default.args = {}