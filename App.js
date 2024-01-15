import React from 'react';
import { StyleSheet, View } from 'react-native';
import BirthdayCard from './Components/BirthdayCard';

export default function App() {
  return (
    <View style={styles.container}>
      <BirthdayCard recipientName="Gran" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
