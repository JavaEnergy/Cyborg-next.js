import React from 'react';
import Image from 'next/image';

// This component helps normalize image paths and handles both static and dynamic imports
const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false,
  ...props 
}) => {
  // Normalize path - remove '/public' if it exists at the start
  const normalizedSrc = src.startsWith('/public') 
    ? src.replace(/^\/public/, '') 
    : src;

  return (
    <Image
      src={normalizedSrc}
      alt={alt || "Image"}
      width={width || 500}
      height={height || 300}
      className={className}
      priority={priority}
      {...props}
    />
  );
};

export default OptimizedImage; 