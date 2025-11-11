import { render, screen } from '@testing-library/react';
import App from '../../src/App';

describe('App Component', () => {
  test('renders splash screen initially', () => {
    render(<App />);
    const splashElement = screen.getByText(/Bible For You/i);
    expect(splashElement).toBeInTheDocument();
  });

  test('navigates to home screen after splash', async () => {
    render(<App />);
    const homeElement = await screen.findByText(/Search for verses/i);
    expect(homeElement).toBeInTheDocument();
  });
});