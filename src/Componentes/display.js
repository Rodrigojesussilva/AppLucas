import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente responsável por exibir o título e a descrição na tela
const Display = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GUIA PORTAGE DE EDUCAÇÃO PRÉ-ESCOLAR</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>A escala Portage para avaliação e cálculo da idade de desenvolvimento</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    // Estilos para o contêiner principal
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDE59',
  },
  // Estilos para o contêiner do título
  titleContainer: {
    marginBottom: 30,
    width: 300,
  },
  // Estilos para o título
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    /* fontFamily: 'Anton-Regular', */
  },
  // Estilos para o contêiner da descrição
  descriptionContainer: {
    marginBottom: 70,
    width: 300,
  },
  // Estilos para a descrição
  description: {
    fontSize: 18,
    marginTop: 20,
    /* fontFamily: 'Roboto-Medium', */
  },
});

export default Display;