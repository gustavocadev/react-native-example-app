import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from './views/About';
import Home from './views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            title: 'Home - Image Search',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('About')}>
                <Text
                  variant="bodyLarge"
                  style={{
                    marginRight: 14,
                  }}
                >
                  About
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
