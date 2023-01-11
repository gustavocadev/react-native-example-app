import * as React from 'react';
import 'react-native-gesture-handler';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import RootNavigator from './RootNavigator';
import { StatusBar } from 'expo-status-bar';

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'tomato',
//     secondary: 'yellow',
//   },
// };

const Main = () => {
  console.log('hello world :D :');
  return (
    <PaperProvider>
      <RootNavigator />
      <StatusBar style="auto" />
    </PaperProvider>
  );
};

export default Main;
