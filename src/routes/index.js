import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../views/LoginScreen";
import HomeScreen from "../views/HomeScreen";
import TodoListScreen from "../views/TodoListScreen";

const Routes = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                <Stack.Screen name="TodoList" component={TodoListScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;