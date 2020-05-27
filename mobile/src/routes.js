import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Home from './pages/Home';
import AboutHistory from './pages/AboutHistory';
import AboutFactory from './pages/AboutFactory';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
                <AppStack.Screen name='Home' component={Home} />
                <AppStack.Screen name='AboutHistory' component={AboutHistory} />
                <AppStack.Screen name='AboutFactory' component={AboutFactory} />
                <AppStack.Screen name='ProductList' component={ProductList} />
                <AppStack.Screen name='ProductDetails' component={ProductDetails} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}