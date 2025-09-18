import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import OnboardingScreen from './src/OnboardingScreen';
import HomeScreen from './src/HomeScreen';

const App: React.FC = () => {
  const [showOnboarding, setShowOnboarding] = useState<boolean>(true);

  const handleOnboardingDone = () => {
    setShowOnboarding(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {showOnboarding ? (
        <OnboardingScreen onDone={handleOnboardingDone} />
      ) : (
        <HomeScreen /> 
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', 
  },
});

export default App;