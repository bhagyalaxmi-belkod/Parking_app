import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/Dashboard";
import Lots from "../screens/Lots";
import Register from "../screens/Register";
import Payment from "../screens/Payment";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            title: "Dashboard",
          }}
        />
        <Stack.Screen
          name="lots"
          component={Lots}
          options={{
            title: "Create Lots",
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ title: "Register Vehicle" }}
        />
        <Stack.Screen
          name="payment"
          component={Payment}
          options={{ title: "Payment" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
