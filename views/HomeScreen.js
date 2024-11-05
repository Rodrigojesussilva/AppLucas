import React from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../src/Componentes/display'; // Importa o componente Display
import CustomButton from '../src/Componentes/button'; // Importa o componente CustomButton

const HomeScreen = ({ navigation }) => {
  const handleGoToCadastro = () => {
    navigation.navigate('CadastroUser');
  };

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {/* Renderiza o componente Display */}
      <Display />
      {/* Renderiza o componente CustomButton com título "Criar conta" e lógica de handleGoToCadastro */}
      <CustomButton title="Criar conta" onPress={handleGoToCadastro} />
      {/* Renderiza o componente CustomButton com título "Já tenho conta", lógica de handleGoToLogin e estilo secundário */}
      <CustomButton title="Já tenho conta" onPress={handleGoToLogin} secondary />
    </View>
  );
};

const styles = StyleSheet.create({
  // Estilos para o contêiner principal
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDE59',
  },
});

export default HomeScreen;