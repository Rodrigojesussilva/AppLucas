import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Cognicao56 = ({ navigation }) => {
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
    
    "Conta até 20 objetos e responde adequadamente à pergunta: 'Quantos ... você contou?'.",
    "Nomeia 10 numerais.",
    "Identifica qual a sua esquerda e qual a sua direita.",
    "Diz as vogais em ordem.",
    "Escreve seu nome com letras de forma.",
    "Nomeia 5 letras do alfabeto.",
    "Ordena objetos em sequência de comprimento e largura.",
    "Nomeia as letras maiúsculas do alfabeto.",
    "Coloca numerais de 1 a 10 na sequência correta.",
    "Identifica a posição de objetos em 1º, 2º e 3º lugar.",
    "Nomeia as letras minúsculas do alfabeto.",
    "Emparelha letras maiúsculas com minúsculas.",
    "Aponta para numerais de 1 a 25.",
    "Copia um losango.",
    "Completa um labirinto simples.",
    "Diz os dias da semana na ordem.",
    "Soma e subtrai combinações de até 3 elementos.",
    "Diz o mês e o dia de seu aniversário.",
    "Lê 10 palavras impressas.",
    "Prediz o que vai ocorrer.",
    " Aponta para objetos inteiros e partidos ao meio.",
    "Conta de memória de 1 a 100 (pedir que pare no 40, e continue no 80, caso não erre até o 40)."
   
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Cognição         5 a 6 anos</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => navigation.goBack('Linguagem56')} style={styles.navButton}>
            <Text style={styles.navButtonText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AutoCuidados56')} style={styles.navButton}>
            <Text style={styles.navButtonText}>{">"}</Text>
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

      {/* Botão Sair */}
      <View style={styles.exitButtonContainer}>
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

export default Cognicao56;