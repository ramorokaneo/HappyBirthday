
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Door = () => {
  const [isDoorOpen, setDoorOpen] = useState(false);

  const handleDoorPress = () => {
    setDoorOpen(!isDoorOpen);
  };

  const renderCuteIcons = () => {
    const numberOfIcons = 90;
    const iconSize = 24;

    const iconPositions = [];
    const iconColors = [];

    for (let i = 0; i < numberOfIcons; i++) {
      let left, top, color;

      do {
        // Generate random position and color
        left = Math.random() * 260 + 20;
        top = Math.random() * 520 + 20;
        color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        // Check for overlap
      } while (isOverlapping({ left, top }, iconPositions, iconSize));

      iconPositions.push({ left, top });
      iconColors.push(color);
    }

    return iconColors.map((color, index) => (
      <Icon
        key={index}
        name="heart"
        size={iconSize}
        color={color}
        style={[styles.cuteIcon, { left: iconPositions[index].left, top: iconPositions[index].top }]}
      />
    ));
  };

  const isOverlapping = (newIcon, existingIcons, iconSize) => {
    for (const existingIcon of existingIcons) {
      const distance = Math.sqrt(
        Math.pow(newIcon.left - existingIcon.left, 2) + Math.pow(newIcon.top - existingIcon.top, 2)
      );

      if (distance < iconSize * 2) {
        // Icons are considered overlapping if their distance is less than twice the icon size
        return true;
      }
    }

    return false;
  };

  return (
    <View style={styles.container}>
      <View style={styles.doorContainer}>
        <View style={[styles.door, isDoorOpen && styles.openDoor]}>
          <View style={styles.iconContainer}>{renderCuteIcons()}</View>
          <View style={styles.handle}></View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleDoorPress}>
        <Text style={styles.buttonText}>{isDoorOpen ? 'Close Door' : 'Open Door'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fce8d4', // Playful background color
  },
  doorContainer: {
    position: 'relative',
    overflow: 'hidden',
  },
  door: {
    width: 300, // Increased door width
    height: 600, // Increased door height
    backgroundColor: '#ffcc00', // Vibrant door color
    borderRadius: 20,
    borderWidth: 5,
    borderColor: '#ff9900', // Fun border color
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
    position: 'relative',
  },
  openDoor: {
    transform: [{ rotate: '90deg' }],
  },
  handle: {
    width: 40,
    height: 8,
    backgroundColor: '#ff6666', // Cute handle color
    borderRadius: 4,
    marginTop: 10,
    position: 'absolute',
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#ff6666', // Cute button color
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  cuteIcon: {
    position: 'absolute',
  },
});

export default Door;
