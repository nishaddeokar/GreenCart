import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../authentication/firebaseConfig';
import { tempData4 } from '../tempData';

const AppContext = createContext();

const AppWrapper = ({ children }) => {
  const [user, setUser] = useState({});
  const [basket, setBasket] = useState([]);

  async function signIn() {
    try {
      await signInAnonymously(auth);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (account) => {
      if (account) {
        user = account;
      } else {
        signIn();
        onAuthStateChanged(auth, (account2) => {
          if (account2) {
            user = account2;
          }
        });
      }
    });
  }, []);

  const store = {
    user,
    setUser,
    basket,
    setBasket,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppWrapper, useAppContext };
