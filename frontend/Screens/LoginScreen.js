import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { auth } from '../authentication/firebaseConfig';
import { signInAnonymously } from 'firebase/auth';

export default function LoginScreen() {
  return (
    <View>
      <Text>Login Page</Text>
    </View>
  );
}
