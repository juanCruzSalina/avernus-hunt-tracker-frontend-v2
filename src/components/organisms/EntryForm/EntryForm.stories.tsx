import React, { Fragment } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react'
import EntryForm from './EntryForm';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { useAppDispatch } from '../../../app/hooks';
import { toggleModal } from '../../../features/modal/modalSlice';
import Button from '../../atoms/Button/Button';

export default {
  title: 'Components/Organisms/EntryForm',
  component: EntryForm,
  decorators: [(Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )]
} as ComponentMeta<typeof EntryForm>;

const Template: ComponentStory<typeof EntryForm> = (args) => {

  const dispatch = useAppDispatch()
  const onModalDispatch =  () => dispatch(toggleModal())

  return (
    <Fragment>
      <Button onClick={onModalDispatch} >Launch Form</Button>
      <EntryForm {...args} />
    </Fragment>
  )
}

export const Default = Template.bind({})
Default.args = {}