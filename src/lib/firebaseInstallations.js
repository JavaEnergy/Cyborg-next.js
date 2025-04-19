import { getInstallations, getId, getToken } from 'firebase/installations';
import { app } from '../firebase';

let installations = null;

export const initializeInstallations = async () => {
  if (typeof window === 'undefined') return null;

  try {
    if (!installations) {
      installations = getInstallations(app);
    }
    return installations;
  } catch (error) {
    console.error('Error initializing Firebase installations:', error);
    return null;
  }
};

export const getInstallationId = async () => {
  try {
    const installations = await initializeInstallations();
    if (!installations) return null;
    
    return await getId(installations);
  } catch (error) {
    console.error('Error getting installation ID:', error);
    return null;
  }
};

export const getInstallationToken = async () => {
  try {
    const installations = await initializeInstallations();
    if (!installations) return null;
    
    return await getToken(installations);
  } catch (error) {
    console.error('Error getting installation token:', error);
    return null;
  }
}; 