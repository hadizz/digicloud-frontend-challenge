import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Tab from './Tab';
import {
  TAB_ARIA_LABEL,
  TAB_BADGE_ARIA_LABEL,
  TAB_BADGE_TESTID,
  TAB_TESTID,
} from './Tab.constants';

const LABEL = 'Tab 1';
const VALUE = '1';
const BADGE = '20';
// https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-setup.md
const setup = () => {
  render(<Tab label={LABEL} value={VALUE} />);
};

test('Tab Component should render', async () => {
  setup();
  expect(await screen.findByRole('tab')).toBeInTheDocument();
});

test('Tab Component should render label and value', async () => {
  setup();
  expect(await screen.findByText(LABEL)).toBeInTheDocument();
});

test('Tab Component should render tab attributes', async () => {
  setup();
  expect(
    await screen.findByTestId(`${TAB_TESTID}${VALUE}`),
  ).toBeInTheDocument();
  expect(
    await screen.findByLabelText(`${TAB_ARIA_LABEL}${LABEL}`),
  ).toBeInTheDocument();
});

test('Tab Component should handle onClick', async () => {
  const handleClick = jest.fn();
  render(<Tab label={LABEL} value={VALUE} onClick={handleClick} />);
  userEvent.click(await screen.findByRole('tab'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('Tab Component should handle disable mode', async () => {
  const handleClick = jest.fn();
  render(<Tab label={LABEL} value={VALUE} onClick={handleClick} disable />);
  userEvent.click(await screen.findByRole('tab'));
  expect(handleClick).toHaveBeenCalledTimes(0);
});

test('Tab Component should render badge', async () => {
  render(<Tab label={LABEL} value={VALUE} badge={BADGE} />);
  expect(
    await screen.findByTestId(`${TAB_BADGE_TESTID}${BADGE}`),
  ).toBeInTheDocument();
  expect(
    await screen.findByLabelText(`${TAB_BADGE_ARIA_LABEL}${BADGE}`),
  ).toBeInTheDocument();
});
