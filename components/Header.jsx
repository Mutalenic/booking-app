import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

const Header = () => {
  const [activePressable, setActivePressable] = useState(null);

  return (
    <View style={styles.container}>
      {/* Blue background */}
      <View style={styles.blueBackground}>
        {/* Stays Pressable */}
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            activePressable === 'stays' && styles.activePressable,
            !pressed && activePressable !== 'stays' && styles.inactivePressable,
          ]}
          onPress={() => {
            setActivePressable('stays');
            // Handle "stays" press event here
          }}
        >
          <Ionicons name="bed" size={24} color="white" />
          <Text style={styles.text}>stays</Text>
        </Pressable>

        {/* Flights Pressable */}
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            styles.additionalPressable,
            activePressable === 'flights' && styles.activePressable,
            !pressed && activePressable !== 'flights' && styles.inactivePressable,
          ]}
          onPress={() => {
            setActivePressable('flights');
            // Handle "flights" press event here
          }}
        >
          <Ionicons name="airplane" size={24} color="white" />
          <Text style={styles.text}>flights</Text>
        </Pressable>

        {/* Car Rental Pressable */}
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            styles.additionalPressable,
            activePressable === 'carRental' && styles.activePressable,
            !pressed && activePressable !== 'carRental' && styles.inactivePressable,
          ]}
          onPress={() => {
            setActivePressable('carRental');
            // Handle "car rental" press event here
          }}
        >
          <Ionicons name="car" size={24} color="white" />
          <Text style={styles.text}>car rental</Text>
        </Pressable>

        {/* Taxi Pressable */}
        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            styles.additionalPressable,
            activePressable === 'taxi' && styles.activePressable,
            !pressed && activePressable !== 'taxi' && styles.inactivePressable,
          ]}
          onPress={() => {
            setActivePressable('taxi');
            // Handle "taxi" press event here
          }}
        >
          <Ionicons name="car-sport" size={24} color="white" />
          <Text style={styles.text}>taxi</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
  },
  blueBackground: {
    backgroundColor: '#007AFF',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pressable: {
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activePressable: {
    borderColor: 'white',
    borderWidth: 1,
  },
  inactivePressable: {
    borderColor: 'transparent',
    borderWidth: 1,
  },
  additionalPressable: {
    marginLeft: 10,
  },
  text: {
    color: 'white',
    marginLeft: 5,
  },
};

export default Header;
