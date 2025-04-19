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

const initializeFirebase = () => {
  if (typeof window === 'undefined') return;

  try {
    // Only initialize if all required config values are present
    const configValues = Object.values(firebaseConfig);
    if (configValues.some(value => !value)) {
      console.error('Missing Firebase configuration values');
      return;
    }

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
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
};

// Initialize Firebase when the module is imported
initializeFirebase();

// Export the initialized services
export { app, analytics, perf, installations };

// Log event function
export const logEvent = (eventName, eventParams) => {
  if (analytics) {
    try {
      firebaseLogEvent(analytics, eventName, eventParams);
    } catch (error) {
      console.error('Error logging event:', error);
    }
  }
}; 