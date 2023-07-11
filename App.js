import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

const BirthdayCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const handleFlip = () => {
    Animated.timing(animatedValue, {
      toValue: isFlipped ? 0 : 180,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped);
    });a
  };

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFlip}>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <Text style={styles.text}>Happy Birthday!</Text>
        </Animated.View>
        <Animated.View style={[styles.card, styles.backCard, backAnimatedStyle]}>
          <Text style={styles.text}>Happy 88th birthday, dear Grandma,
                                    Your love and warmth have no comma.
                                    With each passing year, your light shines bright,
                                    May this day be filled with pure delight!
                                    </Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 350,
    height: 500,
    backgroundColor: '#f6bf',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  backCard: {
    backgroundColor: 'lightblue',
    position: 'absolute',
    top: 0,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default BirthdayCard;