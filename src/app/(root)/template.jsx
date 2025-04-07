// src/app/(root)/template.jsx
'use client'; // Required for client-side hooks

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}