import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  //given
  render(<App />);
   
  // const linkElement = screen.getByText(/learn react/i);
  screen.getByRole("NavBar");
  // expect(linkElement).toBeInTheDocument();
  
});
