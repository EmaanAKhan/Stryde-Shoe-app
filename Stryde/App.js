import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const boxData = [
  { id: 1, label: '$47 \n Nike \n Air Force 1', top: 532, left: 49, image: require('./assets/shoe1.png') },
  { id: 2, label: '$61 \n Reebok Club \n  C1O85', top: 532, left: 249, image: require('./assets/shoe2.png') },
  { id: 3, label: '$45 \n Adidas\n Steer Solos', top: 712, left: 49, image: require('./assets/shoe3.png') },
  { id: 4, label: '$38 \nAdidas \nStan Smith ', top: 712, left: 249, image: require('./assets/shoe4.png') }
];
const WhiteBackgroundScreen = () => {
  return (
      <View style={styles.container}>
        
        {/* Top Image */}
        <Image source={require('./assets/Top.png')} style={styles.topImage} />
        {/* Background Circles */}
        <View style={[styles.circle, { top: 170, left: 20 }]}>
          <Image source={require('./assets/shoe3.png')} style={styles.circleImage} />
          <Text style={styles.circleBoxText}>Casual</Text>
        </View>

        <View style={[styles.circle, { top: 170, left: 150 }]}>
          <Image source={require('./assets/shoe2.png')} style={styles.circleImage} />
          <Text style={styles.circleBoxText}>Athletic</Text>
        </View>

        <View style={[styles.circle, { top: 170, left: 280 }]}>
          <Image source={require('./assets/shoe4.png')} style={styles.circleImage} />
          <Text style={styles.circleBoxText}>Formal</Text>
        </View>

        {/* Main Box */}
        <View style={styles.mainBox}>
          <Text style={styles.mainBoxText}>Upto</Text>
          <Text style={styles.mainBoxText}>50% OFF</Text>
          <Image
            source={require('./assets/shoeT.png')}
            style={styles.mainImage}
            resizeMode="contain"
          />
        </View>

        {/* Blue Squares + Images + Text Below */}
        {boxData.map((box) => (
          <View key={box.id} style={[styles.boxWrapper, { top: box.top, left: box.left }]}>
            <View style={styles.squareBox}>
              <Image source={box.image} style={styles.image} resizeMode="cover" />
            </View>
            <Text style={styles.label}>{box.label}</Text>
          </View>
        ))}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    width: 99,
    height: 99,
    borderRadius: 50,
    backgroundColor: '#D4D4D4',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBox: {
    width: 349,
    height: 177,
    backgroundColor: '#F5F5F5',
    position: 'absolute',
    top: 296,
    left: 29,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
  },
  mainBoxText: {
    fontWeight: 'bold',
    marginLeft: 16,
    fontSize: 33,
    color: '#333',
  },
  boxWrapper: {
    position: 'absolute',
    alignItems: 'center',
  },
  squareBox: {
    width: 91,
    height: 91,
    borderRadius: 10,
    backgroundColor: '#97CEDB',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  image: {
    width: 88,
    height: 88,
    borderRadius: 8,
  },
  label: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  circleImage: {
    width: 99,
    height: 99,
    borderRadius: 50,
  },
  mainImage: {
    width: 287,
    height: 287,
    top: -133,
    left: 65,
  },
  topImage: {
    width: 77,
    height: 77,
    left: 158,
    top: 44,
  },
  circleBoxText: {
    fontSize: 17,
    color: '#333',
    position: 'absolute',
    bottom: -20,
  },
   
});

export default WhiteBackgroundScreen;
