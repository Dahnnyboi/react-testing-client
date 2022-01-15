/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import PostAddModal from 'views/posts/PostAddModal';
import { render, fireEvent } from '@testing-library/react';

function mockComponent(data = {}) {
  const submitMock = jest.fn();
  const toggleMock = jest.fn();
  const component = render(
    <PostAddModal
      isOpen
      data={data}
      isSubmitting={false}
      toggle={toggleMock}
      onSubmit={submitMock}
    />,
  );

  return {
    submitFunction: submitMock,
    toggleFunction: toggleMock,
    component,
  };
}

it('should create new post', () => {
  const { submitFunction, component } = mockComponent();

  const titleInput = component.getByTestId('title-input');
  const messageInput = component.getByTestId('message-input');
  const submitButton = component.getByTestId('submit-button');

  fireEvent.change(titleInput, { target: { value: 'Title 1' } });
  fireEvent.change(messageInput, { target: { value: 'Message 1' } });
  fireEvent.click(submitButton);

  expect(submitFunction).toHaveBeenCalled();
});

it('should require title and message', async () => {
  const { component } = mockComponent();

  const submitButton = component.getByTestId('submit-button');
  await fireEvent.click(submitButton);

  const titleFeedback = await component.findByTestId(
    'title-feedback',
  );
  const messageFeedback = await component.findByTestId(
    'message-feedback',
  );
  expect((await titleFeedback).textContent).toEqual('Required');
  expect((await messageFeedback).textContent).toEqual('Required');
});

it('should close the modal', () => {
  const { component, toggleFunction } = mockComponent();

  const closeButton = component.getByRole('button', {
    name: /close/i,
  });

  fireEvent.click(closeButton);
  expect(toggleFunction).toHaveBeenCalled();
});

// for edit modal
it('should contain data', () => {
  const { component } = mockComponent({
    title: 'Title test',
    message: 'Message test',
  });

  const titleInput = component.getByTestId('title-input');
  const messageInput = component.getByTestId('message-input');

  expect(titleInput.value).toEqual('Title test');
  expect(messageInput.value).toEqual('Message test');
});

it('should change the given data', () => {
  const { component } = mockComponent({
    title: 'Title test',
    message: 'Message test',
  });

  const titleInput = component.getByTestId('title-input');
  const messageInput = component.getByTestId('message-input');

  fireEvent.change(titleInput, {
    target: { value: 'Title test edit' },
  });
  fireEvent.change(messageInput, {
    target: { value: 'Message test edit' },
  });

  expect(titleInput.value).toEqual('Title test edit');
  expect(messageInput.value).toEqual('Message test edit');
});
