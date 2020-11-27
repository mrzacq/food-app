import { render, screen } from '@testing-library/react';
import App from './App';

describe('testing app component', () => {
  test('should render title', () => {
    const { getByText } = render(<App />);
    const title = getByText("Food App");
    expect(title).toBeInTheDocument();
  });
})
