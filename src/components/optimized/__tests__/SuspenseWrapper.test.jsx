import { render, screen } from '@testing-library/react';
import { Suspense } from 'react';
import SuspenseWrapper from '../SuspenseWrapper';

// Create a component that will suspend
const SuspendingComponent = () => {
  throw new Promise(() => {});
};

describe('SuspenseWrapper', () => {
  it('renders children when not suspended', () => {
    render(
      <SuspenseWrapper>
        <div>Test Content</div>
      </SuspenseWrapper>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders custom fallback when provided and component is suspended', () => {
    render(
      <SuspenseWrapper fallback={<div>Custom Loading...</div>}>
        <SuspendingComponent />
      </SuspenseWrapper>
    );

    expect(screen.getByText('Custom Loading...')).toBeInTheDocument();
  });

  it('renders default fallback when no custom fallback is provided and component is suspended', () => {
    render(
      <SuspenseWrapper>
        <SuspendingComponent />
      </SuspenseWrapper>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
}); 