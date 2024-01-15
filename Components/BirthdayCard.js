// BirthdayCard.js
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const BirthdayCard = ({ recipientName }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={[styles.card, isPressed && styles.pressedCard]}>
        {/* Add your background image here */}
        {/* <Image source={require('./path/to/background-image.jpg')} style={styles.backgroundImage} /> */}

        {/* Animated birthday cake gif or image */}
        <Image source={require('../Components/Images/gran.jpg')} style={styles.birthdayCake} />

        {/* Text section */}
        <Text style={styles.text}>
          🎉🎂 Happy Birthday, {recipientName}! 🎂🎉
        </Text>

        {/* Your personal message */}
        <Text style={styles.text}>
          Wishing you a day filled with joy, laughter, and all the things that make your heart smile! 🎈✨
        </Text>

        {/* Special Birthday Message */}
        <Text style={styles.specialMessage}>
          🌟 May your day be as special as you are! 🌟
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    width: width * 0.8,
    maxWidth: 400,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    elevation: 5,
    padding: 20,
    alignItems: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pressedCard: {
    transform: [{ scale: 0.95 }],
  },
  birthdayCake: {
    width: width * 0.4,
    height: width * 0.4,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
  },
  specialMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    color: '#ff6347',
  },
});

export default BirthdayCard;
