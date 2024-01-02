// BirthdayCard.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BirthdayCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Happy Birthday!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB', // Sky blue background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BirthdayCard;
