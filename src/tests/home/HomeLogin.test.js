/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from '@testing-library/react';
import { AuthProvider } from 'contexts/AuthContext';
import HomeLogin from 'views/home/HomeLogin';

configure({ adapter: new Adapter() });

const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve)).catch(
      (reject) => setTimeout(reject),
    );
    wrapper.update();
  });
};

it('should login', async () => {
  const renderedComponent = await mount(
    <AuthProvider>
      <HomeLogin />
    </AuthProvider>,
  );

  waitForComponentToPaint(renderedComponent);
  const emailField = renderedComponent.find('input[type="email"]');
  emailField.instance().value = 'email-test@email.com';
  const passField = renderedComponent.find('input[type="password"]');
  passField.instance().value = 'password';

  renderedComponent.find('button').simulate('click');
  waitForComponentToPaint(renderedComponent);

  expect(renderedComponent.find('button').text()).not.toBe(/login/i);
  renderedComponent.unmount();
});

it('show required fields', async () => {
  const renderedComponent = await mount(
    <AuthProvider>
      <HomeLogin />
    </AuthProvider>,
  );
  waitForComponentToPaint(renderedComponent);

  renderedComponent.find('button').simulate('click');
  waitForComponentToPaint(renderedComponent);

  expect(renderedComponent.text().includes('Required')).toBe(true);

  expect(
    renderedComponent
      .text()
      .includes('Required. This should be a valid email address'),
  ).toBe(true);
  renderedComponent.unmount();
});
