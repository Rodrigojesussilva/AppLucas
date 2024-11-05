import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Regex para validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      Alert.alert("E-mail inválido", "Por favor, insira um e-mail válido.");
      return;
    }

    // Lógica de recuperação de senha (envio de e-mail)
    console.log("Forgot password for:", email);

    // Exibir mensagem de alerta
    Alert.alert(
      "Recuperação de Senha",
      "Um link de recuperação foi enviado para o seu e-mail. Por favor, verifique sua caixa de entrada.",
      [{ text: "OK", onPress: () => navigation.navigate('Login') }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redefinir Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira seu e-mail"
        placeholderTextColor="#919191"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Enviar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDE59'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    /* fontFamily: 'Anton-Regular', */
    padding: 40,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#217744',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    width: 350,
    color: '#000',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#217744',
    borderRadius: 15,
    padding: 15,
    width: 350,
    marginBottom: 20,
    alignItems: 'center',
    height: 55,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default ForgotPassword;