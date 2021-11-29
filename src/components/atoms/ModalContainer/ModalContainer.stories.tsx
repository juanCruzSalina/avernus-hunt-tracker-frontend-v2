import React, { Fragment } from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '../../../app/store'
import ModalContainer from './ModalContainer'
import Button from '../Button/Button'
import { useAppDispatch } from '../../../app/hooks'
import { toggleModal } from '../../../features/modal/modalSlice'

export default {
  title: 'Components/Atoms/Modal Container',
  component: ModalContainer,
  decorators: [(Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )]
} as ComponentMeta<typeof ModalContainer>;


const Template: ComponentStory<typeof ModalContainer> = (args) => {

  const dispatch = useAppDispatch()
  const onModalDispatch =  () => dispatch(toggleModal())

  return (
    <Fragment>
      <ModalContainer {...args}/>
      <Button onClick={onModalDispatch} >Launch Modal</Button>
    </Fragment>
  )
}


export const Default = Template.bind({})
Default.args = {
  children: <div style={{padding: '2rem' ,backgroundColor: 'white'}}>this is a modal</div>
}