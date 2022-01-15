/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import PostDeleteModal from 'views/posts/PostDeleteModal';
import { render, fireEvent } from '@testing-library/react';

function mockComponent() {
  const submitFunction = jest.fn();
  const toggleFunction = jest.fn();
  const component = render(
    <PostDeleteModal
      idToDelete="test id"
      isOpen
      isDeleting={false}
      toggleDelete={toggleFunction}
      onSubmit={submitFunction}
    />,
  );

  return { submitFunction, toggleFunction, component };
}

it('should delete post', () => {
  const { submitFunction, component } = mockComponent();

  const submitButton = component.getByTestId('delete-button');
  fireEvent.click(submitButton);

  expect(submitFunction).toHaveBeenCalled();
});

it('should close modal', () => {
  const { toggleFunction, component } = mockComponent();

  const closeButton = component.getByRole('button', {
    name: /close/i,
  });

  fireEvent.click(closeButton);
  expect(toggleFunction).toHaveBeenCalled();
});
