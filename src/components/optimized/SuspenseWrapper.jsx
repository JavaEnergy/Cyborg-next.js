import React, { Suspense } from 'react';

const SuspenseWrapper = ({ children, fallback = <div>Loading...</div> }) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default SuspenseWrapper; 