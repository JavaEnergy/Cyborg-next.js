import Image from 'next/image';
import { useState, useEffect } from 'react';

const OptimizedNextImage = ({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 75,
  className = '',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    const img = document.querySelector(`img[src="${src}"]`);
    if (img) {
      if (img.complete) {
        setIsLoading(false);
      } else {
        img.addEventListener('load', handleLoad);
        return () => img.removeEventListener('load', handleLoad);
      }
    }
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        className={`
          transition duration-300 ease-in-out
          ${isLoading ? 'blur-sm' : 'blur-0'}
        `}
        {...props}
      />
    </div>
  );
};

export default OptimizedNextImage; 