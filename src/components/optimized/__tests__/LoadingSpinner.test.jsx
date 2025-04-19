import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders with default props', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('w-8 h-8'); // medium size
    expect(spinner).toHaveClass('border-primary-500'); // primary color
  });

  it('renders with custom size', () => {
    render(<LoadingSpinner size="small" />);
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('w-4 h-4');
  });

  it('renders with custom color', () => {
    render(<LoadingSpinner color="secondary" />);
    const spinner = screen.getByRole('status');
    expect(spinner).toHaveClass('border-secondary-500');
  });

  it('renders with custom className', () => {
    render(<LoadingSpinner className="custom-class" />);
    const container = screen.getByRole('status').parentElement;
    expect(container).toHaveClass('custom-class');
  });
}); 