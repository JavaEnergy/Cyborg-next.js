import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

// A component that throws an error
const ErrorComponent = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    // Suppress console error for test
    const originalError = console.error;
    console.error = jest.fn();

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
    expect(screen.getByText('Refresh Page')).toBeInTheDocument();

    // Restore console.error
    console.error = originalError;
  });

  it('displays error details when available', () => {
    const originalError = console.error;
    console.error = jest.fn();

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Test error')).toBeInTheDocument();

    console.error = originalError;
  });
}); 