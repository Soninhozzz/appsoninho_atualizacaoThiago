import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Swiper from 'react-native-swiper';

const onboardingImage1: ImageSourcePropType = require('../assets/onboarding1.png');
const onboardingImage2: ImageSourcePropType = require('../assets/onboarding2.png');
const onboardingImage3: ImageSourcePropType = require('../assets/onboarding3.png');
const elipse: ImageSourcePropType = require('../assets/elipse.png');

interface OnboardingScreenProps {
  onDone: () => void;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onDone }) => {
  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      dot={<View style={styles.dot} />}
      activeDot={<View style={styles.activeDot} />}
      paginationStyle={styles.pagination}
    >
      <View style={styles.slide}>
        <Image source={onboardingImage1} style={styles.image} />
        <Text style={styles.descriptionText}>
          A ansiedade e as noites em claro não precisam ser os seus inimigos.
        </Text>
      </View>

      <View style={styles.slide}>
        <View style={styles.imageContainer}>
          <Image source={elipse} style={styles.imagemDeFundo} />
          <Image source={onboardingImage2} style={styles.image}
          />
        </View>
        <Text style={styles.descriptionText}>
          O Soninho é o seu arsenal de meditações e sons para transformar a ansiedade em tranquilidade.
        </Text>
      </View>

      <View style={styles.slide}>
        <Text style={[styles.descriptionText, styles.topText]}>
          Sua jornada começa agora
        </Text>
        <View style={styles.imageContainer}>
          <Image source={elipse} style={styles.imagemDeFundo2} />
          <Image source={onboardingImage2} style={styles.image}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onDone}>
          <Text style={styles.buttonText}>Inicie minha jornada</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 150,
    height: 150,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#1E1E1E',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    top: 100,
    letterSpacing: 1.5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  imagemDeFundo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
  },
  imagemDeFundo2: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    position: 'absolute',
  },
  descriptionText: {
    color: '#FFFFFF',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 30,
  },
  topText: {
    position: 'absolute',
    top: 160,
    marginTop: 0,
  },
  button: {
    backgroundColor: '#6D50C8',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    position: 'absolute',
    bottom: 180,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    bottom: 100,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 3,
    marginRight: 3,
  },
});

export default OnboardingScreen;