import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MeditacoesScreen: React.FC = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Feitiços Sonoros (Meditações)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default MeditacoesScreen;
