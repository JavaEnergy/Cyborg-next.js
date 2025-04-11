import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent as firebaseLogEvent } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID?.replace(':', ''), // Remove leading colon if present
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
let app;
let analytics;
let performance;

// Only initialize Firebase on the client side
if (typeof window !== 'undefined') {
  try {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    performance = getPerformance(app);
  } catch (error) {
    console.error('Firebase initialization error:', error);
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

export { app, analytics, performance, logEvent }; 