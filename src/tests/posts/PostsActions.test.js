/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import PostsActions from 'views/posts/PostsActions';
import { render, fireEvent } from '@testing-library/react';

function mockComponent() {
  const toggleFunction = jest.fn();
  const component = render(<PostsActions toggle={toggleFunction} />);

  return { toggleFunction, component };
}

it('should open add modal', () => {
  const { toggleFunction, component } = mockComponent();

  const toggleButton = component.getByRole('button', {
    name: /add post/i,
  });
  fireEvent.click(toggleButton);

  expect(toggleFunction).toHaveBeenCalled();
});
