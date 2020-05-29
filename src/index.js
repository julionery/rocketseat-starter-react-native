import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './config/StatusBarConfig'

import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                  name="Home" 
                  component={Main}
                  options={
                    {
                        title: "JSHunt",
                        headerStyle: {
                            backgroundColor: "#DA552F"
                        }, 
                        headerTintColor: "#FFF"
                    }
                  }
                />
                <Stack.Screen 
                  name="Product" 
                  component={Product}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};