import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Front side of the card */}
        <View style={[styles.side, styles.front]}>
          <Image source={require('./Components/Images/grannymadula.jpg')} style={styles.image} />
          <Text style={styles.headerText}>Happy 97th Birthday!</Text>
          <Text style={styles.subHeaderText}>Celebrating a wonderful life</Text>

          {/* Animated GIF */}
          <Image source={require('./Components/Images/giphy.gif')} style={styles.gif} />

          {/* Heartfelt Birthday Message */}
          <Text style={styles.birthdayMessage}>
            On this special day, may joy, love, and laughter fill your heart. Wishing you a year ahead filled with beautiful moments, good health, and endless happiness. Happy Birthday!
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  card: {
    width: 300,
    height: 500, // Adjusted height
    borderRadius: 10,
    overflow: 'hidden',
  },
  side: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 20,
  },
  front: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subHeaderText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
  gif: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  birthdayMessage: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
});

export default App;
