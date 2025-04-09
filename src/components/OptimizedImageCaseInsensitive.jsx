import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// This component helps normalize image paths and handles case sensitivity issues
const OptimizedImageCaseInsensitive = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false,
  ...props 
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset state when src changes
    setImageSrc(src);
    setError(false);
  }, [src]);

  // Normalize path - remove '/public' if it exists at the start
  const normalizedSrc = imageSrc.startsWith('/public') 
    ? imageSrc.replace(/^\/public/, '') 
    : imageSrc;

  // Handle image load error
  const handleError = () => {
    if (!error) {
      setError(true);
      
      // Try case variations for common image paths
      const pathParts = normalizedSrc.split('.');
      const ext = pathParts.pop();
      const basePath = pathParts.join('.');

      // Try different casings
      if (basePath.includes('-')) {
        // Convert web-development.png to web-Development.png
        const parts = basePath.split('-');
        if (parts.length > 1) {
          const lastPart = parts.pop();
          const capitalizedLastPart = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
          const newPath = [...parts, capitalizedLastPart].join('-') + '.' + ext;
          setImageSrc(newPath);
          return;
        }
      }

      // Add more case variations as needed
      if (basePath.includes('/it-consulting')) {
        setImageSrc(basePath.replace('/it-consulting', '/it-Consulting') + '.' + ext);
        return;
      }
      
      if (basePath.includes('/web-development')) {
        setImageSrc(basePath.replace('/web-development', '/web-Development') + '.' + ext);
        return;
      }

      // If all else fails, set a fallback image
      setImageSrc('/assets/images/placeholder.png');
    }
  };

  return (
    <Image
      src={normalizedSrc}
      alt={alt || "Image"}
      width={width || 500}
      height={height || 300}
      className={className}
      priority={priority}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImageCaseInsensitive; 