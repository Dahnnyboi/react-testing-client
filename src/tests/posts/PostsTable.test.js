/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import PostsTable from 'views/posts/PostsTable';
import { fireEvent, render, within } from '@testing-library/react';

const sampleData = [
  {
    createdAt: '2022-01-09',
    message: 'message test 1',
    postId: 'postId test 1',
    title: 'title test 1',
  },
  {
    createdAt: '2022-01-09',
    message: 'message test 2',
    postId: 'postId test 2',
    title: 'title test 2',
  },
  {
    createdAt: '2022-01-09',
    message: 'message test 3',
    postId: 'postId test 3',
    title: 'title test 3',
  },
];

function mockComponent() {
  const toggleEdit = jest.fn();
  const toggleDelete = jest.fn();
  const component = render(
    <PostsTable
      data={sampleData}
      isLoading={false}
      toggleEdit={toggleEdit}
      toggleDelete={toggleDelete}
    />,
  );

  return { component, toggleEdit, toggleDelete };
}

it('should give right amount of tr within given data', () => {
  const { component } = mockComponent();
  const length = sampleData.length;

  const rows = component.getAllByRole('row');
  // minus the thead row
  expect(rows.length - 1).toBe(length);
});

it('should give right value inside of every cell given the data', () => {
  const { component } = mockComponent();

  sampleData.forEach((item) => {
    const { title, createdAt } = item;
    const row = component.getByText(title).closest('tr');

    const utils = within(row);
    expect(utils.getByText(title).textContent).toEqual(title);
    expect(utils.getByText(createdAt).textContent).toEqual(createdAt);
  });
});

it('should toggle 1st row edit inside of table', () => {
  const { component, toggleEdit } = mockComponent();

  // added 1 on index since the first index is the thead
  const firstRow = component.getAllByRole('row')[1];
  const utils = within(firstRow);
  const firstRowEditButton = utils.getByRole('button', {
    name: /edit/i,
  });
  fireEvent.click(firstRowEditButton);

  expect(toggleEdit).toBeCalled();
});

it('should toggle 1st row delete inside of table', () => {
  const { component, toggleDelete } = mockComponent();

  // added 1 on index since the first index is the thead
  const firstRow = component.getAllByRole('row')[1];
  const utils = within(firstRow);
  const firstRowDeleteButton = utils.getByRole('button', {
    name: /delete/i,
  });
  fireEvent.click(firstRowDeleteButton);

  expect(toggleDelete).toBeCalled();
});
