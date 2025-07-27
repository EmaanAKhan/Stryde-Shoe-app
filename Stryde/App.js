import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WhiteBackgroundScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.circle1} />
    <View style={styles.circle2} />
    <View style={styles.circle3} />
    <View style={styles.square} />
    <View style={styles.square1} />
    <View style={styles.square2} />
    <View style={styles.square3} />
    <View style={styles.square4} />
    {/* Square 1 */}
      <View style={styles.boxContainer1}>
        <View style={styles.square1} />
        <Text style={styles.label}>$47</Text>
      </View>

      {/* Square 2 */}
      <View style={styles.boxContainer2}>
        <View style={styles.square2} />
        <Text style={styles.label}>$61</Text>
      </View>

      {/* Square 3 */}
      <View style={styles.boxContainer3}>
        <View style={styles.square3} />
        <Text style={styles.label}>$45</Text>
      </View>

      {/* Square 4 */}
      <View style={styles.boxContainer4}>
        <View style={styles.square4} />
        <Text style={styles.label}>$38</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // white
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle1: {
    width: 99,
    height: 99,
    borderRadius: 60,
    backgroundColor: '#D4D4D4',
    position: 'absolute',
    top: 170,
    left: 20,
  },
  circle2: {
    width: 99,
    height: 99,
    borderRadius: 60,
    backgroundColor: '#D4D4D4',
    position: 'absolute',
    top: 170,
    left: 150,
  },
  circle3: {
    width: 99,
    height: 99,
    borderRadius: 60,
    backgroundColor: '#D4D4D4',
    position: 'absolute',
    top: 170,
    left: 280,
  },
  square: {
    width: 349,
    height: 177,
    backgroundColor: '#F5F5F5',
    position: 'absolute',
    top: 296,
    left: 29,
  },
  square1: {
    width: 119,
    height: 119,
    borderRadius: 10,
    backgroundColor: '#97CEDB',
    position: 'absolute',
    top: 532,
    left: 49,
  },
  square2: {
    width: 119,
    height: 119,
    borderRadius: 10,
    backgroundColor: '#97CEDB',
    position: 'absolute',
    top: 532,
    left: 249,
  },
  square3: {
    width: 119,
    height: 119,
    borderRadius: 10,
    backgroundColor: '#97CEDB',
    position: 'absolute',
    top: 712,
    left: 49,
  },
  square4: {
    width: 119,
    height: 119,
    borderRadius: 10,
    backgroundColor: '#97CEDB',
    position: 'absolute',
    top: 712,
    left: 249,
  },

  
});

export default WhiteBackgroundScreen;
