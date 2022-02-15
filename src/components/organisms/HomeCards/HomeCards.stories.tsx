import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom';
import HomeCards from './HomeCards';

import { faAcquisitionsIncorporated } from '@fortawesome/free-brands-svg-icons';

export default {
  title:'Components/Organisms/HomeCard',
  component: HomeCards,
  decorators: [(Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  )]
} as ComponentMeta<typeof HomeCards>

const Template: ComponentStory<typeof HomeCards> = (args) => <HomeCards {...args} />
export const Default = Template.bind({})
Default.args = {
  title:'Example Card',
  desc: 'example text xd',
  image: 'https://i.imgur.com/MtAoYoF.png',
  icon: faAcquisitionsIncorporated
}
