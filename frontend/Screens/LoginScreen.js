import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../authentication/firebaseConfig';
import { signInAnonymously } from 'firebase/auth';

export default function LoginScreen() {
  useEffect(() => {
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }, []);

  return (
    <View>
      <Text>Login Page</Text>
    </View>
  );
}
