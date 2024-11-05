import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';

const DesenvMotor56 = ({ navigation }) => {
  const [checked, setChecked] = useState({});

  const handleRadioChange = (question, value) => {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [question]: value,
    }));
  };

  const handleExit = () => {
    Alert.alert(
      "Você tem certeza que deseja sair?",
      "O progresso não será salvo",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { text: "Sim", onPress: () => navigation.navigate('CadastroAluno') }
      ]
    );
  };

  const questions = [
    
    "Escreve letras de imprensa maiúsculas, isoladas e grandes em qualquer lugar do papel.",
    "Anda sobre uma tábua para trás, para frente e para os lados, mantendo o equilíbrio.",
    "Caminha saltitando.",
    "Balança em um balanço iniciando e mantendo o movimento.",
    "Estica os dedos tocando o polegar em cada um deles.",
    "Copia letras maiúsculas.",
    "Sobe em escadas de mão ou de escorregador de 3 m.",
    "Bate em um prego com martelo.",
    "Rebate a bola à medida que anda com direção.",
    "Consegue colorir sem sair da margem em 95% das vezes.",
    "Recorta figuras sem sair mais que 6 mm da margem.",
    "Usa apontador de lápis.",
    "Copia desenhos complexos (escola, navio).",
    "Rasga figuras simples de um papel.",
    "Dobra um papel quadrado 2x em diagonal por imitação.",
    "Apanha uma bola leve com uma só mão.",
    "Pula corda sozinho.",
    "Golpeia uma bola com um bastão ou pedaço de pau.",
    "Apanha um objeto no chão enquanto corre.",
    "Patina uma distância de 3 m, ou usa skate.",
    "Anda de bicicleta.",
    "Escorrega descendo um monte de areia ou terra.",
    "Anda ou brinca em piscina tendo água até a cintura.",
    "Conduz um patinete dando impulso com um só pé.",
    "Salta e gira em um só pé.",
    "Escreve seu nome com letras de forma em caderno pautado.",
    "Salta de uma altura de 30 cm. e cai na ponta dos pés.",
    "Pára em um só pé sem apoio com olhos fechados por 10 segundos.",
    "Dependura-se por 10 segundos em uma barra horizontal."
      
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Desenvolvimento Motor    5 a 6 anos</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => navigation.goBack('AutoCuidados56')} style={styles.navButton}>
            <Text style={styles.navButtonText}>{"<"}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Questions Section */}
      <ScrollView style={styles.scrollContainer}>
        {questions.map((question, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.questionText}>{question}</Text>
            <View style={styles.radioButtonContainer}>
              <View style={styles.radioButtonRow}>
                <RadioButton
                  color='#000'
                  value="sim"
                  status={checked[question] === 'sim' ? 'checked' : 'unchecked'}
                  onPress={() => handleRadioChange(question, 'sim')}
                />
                <Text style={styles.radioButtonLabel}>Sim</Text>
              </View>
              <View style={styles.radioButtonRow}>
                <RadioButton
                  color='#000'
                  value="nao"
                  status={checked[question] === 'nao' ? 'checked' : 'unchecked'}
                  onPress={() => handleRadioChange(question, 'nao')}
                />
                <Text style={styles.radioButtonLabel}>Não</Text>
              </View>
              <View style={styles.radioButtonRow}>
                <RadioButton
                  color='#000'
                  value="asVezes"
                  status={checked[question] === 'asVezes' ? 'checked' : 'unchecked'}
                  onPress={() => handleRadioChange(question, 'asVezes')}
                />
                <Text style={styles.radioButtonLabel}>Às vezes</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Next Button Section */}
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Feedback')} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Gerar FeedBack</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
          <Text style={styles.exitButtonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFDE59',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  headerButtons: {
    flexDirection: 'row',
  },
  navButton: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#217744',
    borderRadius: 5,
  },
  navButtonText: {
    fontSize: 20,
    color: 'white',
  },
  scrollContainer: {
    flex: 1,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    color: 'black', //#333
    marginBottom: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonLabel: {
    fontSize: 16,
    marginLeft: 8,
    color: 'black',
  },
  nextButtonContainer: {
    /* alignItems: 'flex-end', */
    flexDirection: 'row', // Alinha os botões horizontalmente
    justifyContent: 'space-between', // Espaçamento entre os botões
    marginTop: 20,
    margin: 20,
  },
  nextButton: {
    padding: 10,
    backgroundColor: '#217744',
    borderRadius: 5,
    flex: 0,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
  },
  exitButtonContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  exitButton: {
    padding: 10,
    backgroundColor: '#217744',
    borderRadius: 5,
  },
  exitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DesenvMotor56;