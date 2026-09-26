import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useFonts, Rajdhani_700Bold, Rajdhani_500Medium } from '@expo-google-fonts/rajdhani';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

import { SignIn } from './src/screens/SignIn';
import { Home } from './src/screens/Home';
import { AppointmentCreate } from './src/screens/AppointmentCreate';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
    Rajdhani_500Medium,
    Inter_400Regular,
  });
  const [screen, setScreen] = useState('signin');

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  if (screen === 'signin') {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <SignIn onPress={() => setScreen('home')} />
      </>
    );
  }

  if (screen === 'appointment-create') {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AppointmentCreate onBack={() => setScreen('home')} />
      </>
    );
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home
        onAddPress={() => setScreen('appointment-create')}
        onLogout={() => setScreen('signin')}
      />
    </>
  );
}