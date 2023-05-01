// Import the necessary dependencies
import { useEffect, useState } from 'react';
import { auth } from '../../Firebase';
import { onAuthStateChanged } from 'firebase/auth';

// Define the custom hook named useAuthState
const useAuthState = () => {
  // Create a state to store the user object
  const [user, setUser] = useState(null);

  // Use the useEffect hook to set up the onAuthStateChanged listener
  useEffect(() => {
    // The onAuthStateChanged function returns a function to unsubscribe
    // from the listener when called
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If the user is logged in, update the user state
      if (user) {
        setUser(user);
      } else {
        // If the user is logged out, set the user state to null
        setUser(null);
      }
    });

    // The useEffect cleanup function will be called when the component is
    // unmounted, which will unsubscribe from the listener
    return () => unsubscribe();
  }, []); // Empty dependency array ensures the effect only runs on mount and unmount

  // Return the current user object
  return user;
};

// Export the custom hook so it can be used in other components
export default useAuthState;
