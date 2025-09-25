import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const artigos = [
  {
    id: 3,
    titulo: 'Dicas para manter rotina saudável',
    data: '10/09/2025',
    conteudo: 'Dormir cedo, reduzir o uso do celular à noite e praticar exercícios leves podem aumentar sua energia durante o dia.'
  },
  {
    id: 2,
    titulo: 'Atualização no app Soninho',
    data: '15/09/2025',
    conteudo: 'Foi adicionada a nova seção Biblioteca de Morfeu com dezenas de sons relaxantes para dormir melhor.'
  },
  {
    id: 1,
    titulo: 'Novo estudo sobre sono em jovens',
    data: '18/09/2025',
    conteudo: 'Pesquisadores do CEFET-MG mostram que o uso de sons relaxantes melhora a qualidade do sono em 70% dos alunos.'
  },
];

const ArtigosScreen: React.FC = () => {
  const ordenados = [...artigos].sort((a, b) => b.id - a.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Artigos & Atualizações</Text>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        {ordenados.map((artigo) => (
          <View key={artigo.id} style={styles.card}>
            <Text style={styles.cardTitle}>{artigo.titulo}</Text>
            <Text style={styles.cardDate}>{artigo.data}</Text>
            <Text style={styles.cardContent}>{artigo.conteudo}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#1a1a1a',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 18,
  },
  scroll: {
    flex: 1,
  },
  card: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  cardDate: {
    color: '#b0b0b0',
    fontSize: 12,
    marginBottom: 8,
  },
  cardContent: {
    color: '#DDDDDD',
    fontSize: 14,
    lineHeight: 20,
  },
});

export default ArtigosScreen;
