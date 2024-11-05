import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Componente responsável por renderizar um botão na tela
const CustomButton = ({ title, onPress, secondary }) => {
  return (
    // Botão com TouchableOpacity para torná-lo clicável
    <TouchableOpacity style={[styles.button, secondary && styles.secondaryButton]} onPress={onPress}>
      <Text style={[styles.buttonText, secondary && styles.secondaryButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Estilos para o botão
  button: {
    backgroundColor: '#217744',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
  },
  // Estilos para o texto do botão
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  // Estilos para o botão secundário
  secondaryButton: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#217744',
  },
  // Estilos para o texto do botão secundário
  secondaryButtonText: {
    color: '#217744',
  },
});

export default CustomButton;