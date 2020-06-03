import React from 'react';
import { render } from '@testing-library/react';
import Home from './components/Home/Home';

test('renders text', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/Secure Password Generator/i);
  expect(linkElement).toBeInTheDocument();
});
