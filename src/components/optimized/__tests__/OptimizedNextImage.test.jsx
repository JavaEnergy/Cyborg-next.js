import { render, screen, act } from '@testing-library/react';
import OptimizedNextImage from '../OptimizedNextImage';

describe('OptimizedNextImage', () => {
  it('renders with correct props', () => {
    render(
      <OptimizedNextImage
        src="/test-image.jpg"
        alt="Test Image"
        width={100}
        height={100}
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test Image');
    expect(image).toHaveAttribute('width', '100');
    expect(image).toHaveAttribute('height', '100');
  });

  it('applies loading class initially and removes it after loading', async () => {
    render(
      <OptimizedNextImage
        src="/test-image.jpg"
        alt="Test Image"
        width={100}
        height={100}
      />
    );

    const image = screen.getByRole('img');
    expect(image).toHaveClass('blur-sm');

    // Simulate image load
    await act(async () => {
      const event = new Event('load');
      Object.defineProperty(image, 'complete', { value: true });
      image.dispatchEvent(event);
    });

    // Wait for the state update
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
    });

    expect(image).toHaveClass('blur-0');
  });
}); 