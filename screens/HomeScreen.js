import { StyleSheet, Text, View } from 'react-native';
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
      <Header/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  notificationIcon: {
    marginRight: 16, // Adjust the margin if needed
    borderRadius: 50, // Make it round
    padding: 8, // Add some padding for space
  },
});

export default HomeScreen;
