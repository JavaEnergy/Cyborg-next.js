import React from 'react';
import PropTypes from 'prop-types';

/**
 * LoadingSpinner component displays a loading animation
 * @param {Object} props - Component props
 * @param {string} [props.size='medium'] - Size of the spinner (small, medium, large)
 * @param {string} [props.color='primary'] - Color of the spinner
 * @param {string} [props.className=''] - Additional CSS classes
 */
const LoadingSpinner = ({ size = 'medium', color = 'primary', className = '' }) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  };

  const colorClasses = {
    primary: 'border-primary-500',
    secondary: 'border-secondary-500',
    white: 'border-white'
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} ${colorClasses[color]} 
          border-2 border-t-transparent rounded-full animate-spin`}
      />
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  className: PropTypes.string
};

export default LoadingSpinner; 