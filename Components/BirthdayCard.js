import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import ImageSlider from 'react-native-image-slider-box';

const BirthdayCard = () => {
  const images = [
    require('../Files/Images/gran.jpg'),
    require('../Files/Images/Grandma.jpg'),
    require('../Files/Images/granny.jpg'),
    require('../Files/Images/grannymadula.jpg'),
    require('../Files/Images/magog.jpg'),
  ];

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' || Platform.OS === 'android' ? (
        <ImageSlider
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) => console.log(`image ${index} pressed`)}
        />
      ) : (
        <Text>Image slider is not supported on the web.</Text>
      )}
      <Text style={styles.text}>Happy Birthday!</Text>
      {Platform.OS === 'ios' || Platform.OS === 'android' ? (
        <ImageSlider
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) => console.log(`image ${index} pressed`)}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB', // Sky blue background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default BirthdayCard;