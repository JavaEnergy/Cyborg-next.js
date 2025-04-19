const Image = ({ src, alt, width, height, priority, onLoadingComplete, ...props }) => {
  // Don't call onLoadingComplete immediately to test loading state
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-priority={priority ? 'true' : 'false'}
      {...props}
    />
  );
};

Image.displayName = 'NextImage';
export default Image; 