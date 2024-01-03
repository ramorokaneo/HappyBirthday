import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const BirthdayCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happy 90th Birthday!</Text>
      <Text style={styles.message}>
        Dear Grandma, on this special day, may your heart be filled with joy and your spirit with
        love. Wishing you a blessed 90th birthday surrounded by the warmth of family and friends.
        Cheers to a lifetime of wonderful memories and countless more to come!
      </Text>
      <View style={styles.iconsContainer}>
        {renderRandomIcons('heart', 12)}
        {renderRandomIcons('flower', 12)}
        {renderRandomIcons('birthday-cake', 12)}
        {renderRandomIcons('balloon', 12)}
        {renderRandomIcons('kiss', 12)}
        {renderRandomIcons('sparkle', 24)}
      </View>
      <View style={styles.stickmanContainer}>
        <Icon name="male" size={40} color="#333" style={styles.stickman} />
        <Icon name="female" size={40} color="#333" style={styles.stickman} />
        <Icon name="child" size={40} color="#333" style={styles.stickman} />
      </View>
    </View>
  );
};

const renderRandomIcons = (iconName, count) => {
  return Array.from({ length: count }).map((_, index) => (
    <Icon
      key={index}
      name={iconName}
      size={20}
      color={`hsl(${Math.random() * 360}, 100%, 50%)`}
      style={getRandomIconPosition()}
    />
  ));
};

const getRandomIconPosition = () => {
  return {
    position: 'absolute',
    top: Math.random() * 200 - 100, // Adjust these values based on your layout
    left: Math.random() * 200 - 100,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  iconsContainer: {
    position: 'relative',
    marginTop: 20,
  },
  stickmanContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  stickman: {
    marginHorizontal: 5,
  },
});

export default BirthdayCard;
