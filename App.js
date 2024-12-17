import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './final/dashboard';
import LoginScreen from './final/LoginScreen';
import NotificationScreen from './final/NotificationScreen';
import Profile from './final/Profile';
import SignupScreen from './final/SignupScreen';
import Welcome from './final/welcom';
import Menu from './final/Menu';
import Marketplace from './final/MarketPlace';
import Filter from './final/Filter';

import OrderDetail from './final/OrderDetail';
import ConfirmOrder from './final/ConfirmOrder';
import Payment from './final/Payment';
import Shipping from './final/Shipping';
import SetLocation from './final/SetLocation';
import TrackOrder from './final/TrackOrder';

// Importing the new screens for password recovery flow
import ForgotPassword from './screens/ForgotPassword';
import VerifyCode from './screens/VerifyCode';
import PasswordReset from './screens/PasswordReset';
import SetNewPassword from './screens/SetNewPassword';
import Success from './screens/Success';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Marketplace" component={Marketplace} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
        
        {/* Password Recovery Flow Screens */}
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="PasswordReset" component={PasswordReset} />
        <Stack.Screen name="SetNewPassword" component={SetNewPassword} />
        <Stack.Screen name="Success" component={Success} />

        <Stack.Screen name="OrderDetail" component={OrderDetail} />
        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="Shipping" component={Shipping} />
        <Stack.Screen name="SetLocation" component={SetLocation} />
        <Stack.Screen name="TrackOrder" component={TrackOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
