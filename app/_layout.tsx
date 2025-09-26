import { StatusBar } from 'react-native';
import '../global.css'
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}
