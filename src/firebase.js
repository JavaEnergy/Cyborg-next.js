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
let app = null;
let analytics = null;
let perf = null;
let installations = null;

if (typeof window !== 'undefined') {
  try {
    // Only initialize if all required config values are present
    if (Object.values(firebaseConfig).every(value => value)) {
      app = initializeApp(firebaseConfig);
      
      // Initialize Analytics
      isSupported().then(yes => {
        if (yes) {
          try {
            analytics = getAnalytics(app);
          } catch (error) {
            console.error('Firebase analytics initialization error:', error);
          }
        }
      });

      // Initialize Performance Monitoring
      try {
        perf = getPerformance(app);
      } catch (error) {
        console.error('Firebase performance initialization error:', error);
      }

      // Initialize Installations
      try {
        installations = getInstallations(app);
      } catch (error) {
        console.error('Firebase installations initialization error:', error);
      }
    } else {
      console.warn('Firebase not initialized: Missing required config values');
    }
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

export { app, analytics, perf, installations, logEvent }; 