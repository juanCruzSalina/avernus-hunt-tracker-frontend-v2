import React, { Fragment } from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Provider } from "react-redux";
import Dialog from "./Dialog";
import { store } from "../../../app/store";
import Button from "../../atoms/Button/Button";
import { useAppDispatch } from "../../../app/hooks";
import { toggleModal } from "../../../features/modal/modalSlice";

export default {
  title: 'Components/Molecules/Dialog',
  component: Dialog,
  decorators: [(Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )]
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {

  const dispatch = useAppDispatch()
  const showDialog = () => dispatch(toggleModal())

  return(
    <Fragment>
      <Dialog {...args} />
      <Button onClick={showDialog} >Launch Dialog</Button>
    </Fragment>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'Dialog Example',
  content: 'Are you sure about that?',
  onConfirm: () => alert('action confirmed'),
  onCancel: () => alert('action cancelled')
}