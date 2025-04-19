import { renderHook, act } from '@testing-library/react';
import { useForm } from '../useForm';

describe('useForm', () => {
  it('initializes with default values', () => {
    const { result } = renderHook(() => useForm({ name: '', email: '' }));
    expect(result.current.values).toEqual({ name: '', email: '' });
  });

  it('handles input changes', () => {
    const { result } = renderHook(() => useForm({ name: '', email: '' }));
    
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'John' }
      });
    });

    expect(result.current.values).toEqual({ name: 'John', email: '' });
  });

  it('handles form submission', async () => {
    const onSubmit = jest.fn();
    const { result } = renderHook(() => useForm({ name: 'John' }, onSubmit));

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: jest.fn()
      });
    });

    expect(onSubmit).toHaveBeenCalledWith({ name: 'John' });
    expect(result.current.isSubmitting).toBe(false);
  });

  it('handles submission errors', async () => {
    const error = { message: 'Error occurred' };
    const onSubmit = jest.fn().mockRejectedValue({ response: { data: error } });
    const { result } = renderHook(() => useForm({ name: 'John' }, onSubmit));

    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: jest.fn()
      });
    });

    expect(result.current.errors).toEqual(error);
    expect(result.current.isSubmitting).toBe(false);
  });
}); 