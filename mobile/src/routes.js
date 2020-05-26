import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './pages/Menu';
import Cervejas from './pages/Cervejas';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Menu' component={Menu} />
                <AppStack.Screen name='Cervejas' component={Cervejas} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}