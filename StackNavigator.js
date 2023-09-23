import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useIsFocused } from '@react-navigation/native';
import { AntDesign, Entypo, Ionicons } from 'react-native-vector-icons';
import HomeScreen from './screens/HomeScreen';
import SavedScreen from './screens/SavedScreen';
import BookingsScreen from './screens/BookingsScreen';
import ProfileScreen from './screens/ProfileScreen';

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    const isFocused = useIsFocused(); // Use useIsFocused to determine if a tab is focused

    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="ios-home" color="#007AFF" size={24} />
              ) : (
                <Ionicons name="ios-home-outline" color="gray" size={24} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="ios-heart" color="#007AFF" size={24} />
              ) : (
                <Ionicons name="ios-heart-outline" color="gray" size={24} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Bookings"
          component={BookingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="notifications" color="#007AFF" size={24} />
              ) : (
                <Ionicons name="notifications-outline" color="gray" size={24} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <Ionicons name="ios-person" color="#007AFF" size={24} />
              ) : (
                <Ionicons name="ios-person-outline" color="gray" size={24} />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
