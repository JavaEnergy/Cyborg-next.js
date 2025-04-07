'use client';

// Adapted from the original reportWebVitals.js
import { onCLS, onFID, onLCP, onTTFB } from 'web-vitals';

export function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onFID(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
} 