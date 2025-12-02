import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Screens
import MapScreen from './MapScreen';
import DrawerContent from './components/DrawerContent';

// Placeholder screens (we'll implement these next)
const OrderHistoryScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Order History</Text></View>;
const WalletsScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Wallets & Payments</Text></View>;
const MyDronesScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>My Drones</Text></View>;
const RewardsScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Rewards</Text></View>;
const SettingsScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Settings</Text></View>;
const HelpScreen = () => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Help</Text></View>;

import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: '#4A90E2',
        drawerInactiveTintColor: '#666',
        drawerLabelStyle: {
          marginLeft: -16,
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={MapScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Order History"
        component={OrderHistoryScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="time-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Wallets & Payments"
        component={WalletsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Drones"
        component={MyDronesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="airplane-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Rewards"
        component={RewardsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="gift-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <DrawerNavigator />
    </NavigationContainer>
  );
}
