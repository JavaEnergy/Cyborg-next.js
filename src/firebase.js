import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent as firebaseLogEvent } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { getInstallations } from "firebase/installations";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes && (analytics = getAnalytics(app)));
}

// Initialize Performance Monitoring
let perf = null;
if (typeof window !== 'undefined') {
  perf = getPerformance(app);
}

// Initialize Installations only in browser environment
let installations = null;
if (typeof window !== 'undefined') {
  try {
    // Only initialize installations if all required config values are present
    if (firebaseConfig.apiKey && firebaseConfig.projectId) {
      installations = getInstallations(app);
    } else {
      console.warn('Firebase installations not initialized: Missing required config values');
    }
  } catch (error) {
    console.error('Firebase installations error:', error);
    // Don't throw the error, just log it
  }
}

// Function to log events
const logEvent = (eventName, eventParams) => {
  if (typeof window !== 'undefined' && analytics) {
    try {
      firebaseLogEvent(analytics, eventName, eventParams);
    } catch (error) {
      console.error('Firebase analytics error:', error);
    }
  }
};

export { app, analytics, perf, installations, logEvent }; 