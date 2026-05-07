import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ headerShown: false }} // Esconde o header na tela inicial
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Personagens',
                        headerStyle: { backgroundColor: '#202329' },
                        headerTintColor: '#deff9a',
                        headerTitleAlign: 'center'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};