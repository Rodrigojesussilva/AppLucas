import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Display from '../src/Componentes/display'; // Importa o componente Display
import CustomButton from '../src/Componentes/button'; // Importa o componente CustomButton

const WelcomeScreen = ({ navigation }) => {
  const handleGoToProfile = () => {
    navigation.navigate('Profile'); // Navegar para uma tela de perfil, por exemplo
  };

  const handleLogout = () => {
    navigation.navigate('Login'); // Navegar de volta para a tela de login para sair
  };

  return (
    <View style={styles.container}>
      <Display />
      <Text style={styles.welcomeText}>Bem-vindo ao aplicativo!</Text>
      <CustomButton title="Meu Perfil" onPress={handleGoToProfile} />
      <CustomButton title="Sair" onPress={handleLogout} secondary />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDE59',
  },
  welcomeText: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
