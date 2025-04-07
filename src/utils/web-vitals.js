import { logEvent } from '@/firebase';

export function reportWebVitals(metric) {
  const { id, name, value } = metric;
  
  // Log to Firebase Analytics
  logEvent('web_vitals', {
    metric_name: name,
    metric_value: value,
    metric_id: id,
    url: window.location.href,
  });
  
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  }
} 