import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DiarioScreen = () => (
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Diário do Herói</Text>
    </View>
);

const ArtigosScreen = () => (
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Artigos e Dicas</Text>
    </View>
);

const MeditacoesScreen = () => (
    <View style={styles.pageContainer}>
        <Text style={styles.pageTitle}>Feitiços Sonoros (Meditações)</Text>
    </View>
);

const Dashboard = ({ navigateToDiary }: { navigateToDiary: () => void }) => {
    return (
        <ScrollView style={styles.dashboardContainer}>
            <Text style={styles.welcomeTitle}>Olá, [Nome do Herói]!</Text>
            <Text style={styles.welcomeSubtitle}>Pronto para sua próxima jornada de descanso?</Text>

            <View style={styles.levelContainer}>
                <Icon name="account-biker" size={40} color="#c5a8ff" />
                <View style={styles.levelTextContainer}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                       <Text style={styles.levelText}>Herói Nível 13</Text>
                       <Icon name="cloud-outline" size={24} color="#FFF" style={{marginLeft: 8}}/>
                    </View>
                    <View style={styles.progressBarBackground}>
                        <View style={styles.progressBarFill} />
                    </View>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Sua última noite:</Text>
            <View style={styles.card}>
                 <Icon name="weather-night-partly-cloudy" size={70} color="#ffde59" />
                 <View>
                    <Icon name="alarm" size={20} color="#FFF" />
                    <Text style={styles.cardText}>8h15 de sono</Text>
                    <TouchableOpacity onPress={navigateToDiary}>
                       <Text style={styles.cardLink}>Ver detalhes no diário &gt;</Text>
                    </TouchableOpacity>
                 </View>
            </View>

            <Text style={styles.sectionTitle}>Feitiço sonoro pra hoje:</Text>
            <TouchableOpacity style={styles.soundSpellCard}>
                 <Icon name="weather-pouring" size={30} color="#FFF" />
                 <View style={{marginLeft: 15, flex: 1}}>
                    <Text style={styles.cardText}>Chuva na janela</Text>
                    <Text style={styles.cardSubtext}>30 min</Text>
                 </View>
                 <Icon name="play-circle-outline" size={30} color="#FFF" />
            </TouchableOpacity>
        </ScrollView>
    );
};

const HomeScreen = () => {
  const [activeScreen, setActiveScreen] = useState('Dashboard');

  const renderContent = () => {
    switch (activeScreen) {
      case 'Diario':
        return <DiarioScreen />;
      case 'Artigos':
        return <ArtigosScreen />;
      case 'Meditacoes':
        return <MeditacoesScreen />;
      default:
        return <Dashboard navigateToDiary={() => setActiveScreen('Diario')} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a1a" />
      
      {renderContent()}
      
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton} onPress={() => setActiveScreen('Dashboard')}>
          <Icon name="shield-home" size={30} color={activeScreen === 'Dashboard' ? '#FFFFFF' : '#c5a8ff'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setActiveScreen('Diario')}>
          <Icon name="notebook-edit-outline" size={30} color={activeScreen === 'Diario' ? '#FFFFFF' : '#c5a8ff'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setActiveScreen('Artigos')}>
          <Icon name="book-open-page-variant" size={30} color={activeScreen === 'Artigos' ? '#FFFFFF' : '#c5a8ff'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => setActiveScreen('Meditacoes')}>
          <Icon name="headphones" size={30} color={activeScreen === 'Meditacoes' ? '#FFFFFF' : '#c5a8ff'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  dashboardContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
   pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'serif',
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#b0b0b0',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 30,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  levelTextContainer: {
      flex: 1,
      marginLeft: 15,
  },
  levelText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    marginTop: 8,
  },
  progressBarFill: {
    height: 10,
    width: '70%',
    backgroundColor: '#8a63d2',
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  card: {
    backgroundColor: '#2c2c2c',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtext: {
    color: '#b0b0b0',
    fontSize: 14,
  },
  cardLink: {
      fontSize: 12,
      color: '#c5a8ff',
      marginTop: 8,
  },
  soundSpellCard: {
    backgroundColor: '#2c2c2c',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  bottomNav: {
    height: 80,
    backgroundColor: '#6225a4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#7b41c8'
  },
  navButton: {
    padding: 10,
  },
});

export default HomeScreen;

