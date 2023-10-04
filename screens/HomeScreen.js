import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from 'react-native-vector-icons';
import Header from '../components/Header';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking.com",
      headerTitleAlign: 'center', // Center-align the header title
      headerTitleStyle: {
        color: 'white', // Change the text color to white
        fontSize: 24, // Adjust font size if needed
        fontWeight: 'bold', // Add fontWeight if needed
        borderBottomWidth: 0, // Make the bottom border invisible
      },
      headerStyle: {
        backgroundColor: '#007AFF', // Blue background color
        borderBottomColor: 'transparent', // Set bottom border color to transparent
        shadowColor: 'transparent', // Set shadow color to transparent
      },
      headerRight: () => (
        <View style={styles.notificationIcon}>
          <Ionicons name="notifications" color="white" size={24} />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.mainRectangle}>
          {/* Destination */}
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              {
                borderColor: pressed ? 'transparent' : '#FFC72C',
                marginTop: 10, // Add space above the first rectangle
                paddingHorizontal: 10, // Add horizontal padding
                width: '90%', // Cover 90% of the width
              },
            ]}
            onPress={() => {
              // Handle destination press
            }}
          >
            <Ionicons name="search" size={24} color="#007AFF" />
            {/* You can add text or other content here */}
          </Pressable>

          {/* Selected dates */}
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              {
                borderColor: pressed ? 'transparent' : '#FFC72C',
                paddingHorizontal: 10, // Add horizontal padding
                width: '90%', // Cover 90% of the width
              },
            ]}
            onPress={() => {
              // Handle selected dates press
            }}
          >
            <Ionicons name="calendar" size={24} color="#007AFF" />
            {/* You can add text or other content here */}
          </Pressable>

          {/* Rooms and guests */}
          <Pressable
            style={({ pressed }) => [
              styles.pressable,
              {
                borderColor: pressed ? 'transparent' : '#FFC72C',
                paddingHorizontal: 10, // Add horizontal padding
                width: '90%', // Cover 90% of the width
              },
            ]}
            onPress={() => {
              // Handle rooms and guests press
            }}
          >
            <Ionicons name="people" size={24} color="#007AFF" />
            {/* You can add text or other content here */}
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainRectangle: {
    backgroundColor: 'white',
    flexDirection: 'column', // Change to column layout
    alignItems: 'center',
  },
  pressable: {
    borderColor: '#FFC72C',
    borderWidth: 2,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, // Make each Pressable cover equal width
  },
  notificationIcon: {
    marginRight: 16, // Adjust the margin if needed
    borderRadius: 50, // Make it round
    padding: 8, // Add some padding for space
  },
});

export default HomeScreen;
