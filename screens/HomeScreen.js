import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      title: "Booking.com",
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Booking.com</Text>
      </View>
      <View style={styles.content}>
        <Text>Rest of the content goes here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 110,
    backgroundColor: '#007AFF', // Blue background color
    justifyContent: 'center', // Vertically center the text
    alignItems: 'center', // Horizontally center the text
  },
  headerText: {
    color: 'white', // White text color
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1, // Take remaining vertical space
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
});

export default HomeScreen;
