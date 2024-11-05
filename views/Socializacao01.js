import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Socializacao01 = ({ navigation }) => {
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
    "Observa uma pessoa movimentando-se em seu campo visual.",
    "Sorri em resposta à atenção do adulto.",
    "Vocaliza em resposta à atenção.",
    "Olha para sua própria mão, sorrindo ou vocalizando.",
    "Responde a seu círculo familiar, sorrindo, vocalizando ou parando de chorar.",
    "Sorri em resposta à expressão facial dos outros.",
    "Sorri e vocaliza ao ver sua imagem no espelho.",
    "Acaricia ou toca no rosto de adultos (puxa cabelo, nariz, óculos, etc.). ",
    "Estende a mão em direção a um objeto oferecido.",
    "Estende os braços em direção a pessoas familiares.",
    "Estende a mão e toca sua imagem refletida no espelho.",
    "Segura e examina por 1 minuto um objeto que lhe foi dado.",
    "Sacode ou aperta um objeto colocado em sua mão, produzindo sons involuntários.",
    "Brinca sozinho por 10 minutos.",
    "Procura contato visual quando alguém lhe dá atenção por 2 a 3 minutos.",
    "Brinca sozinho sem reclamar por 15 a 20 minutos, próximo de um adulto.",
    "Vocaliza para obter atenção.",
    "Imita adulto em brincadeiras de esconde-esconde.",
    "Bate palmas, imitando um adulto.",
    "Acena a mão, imitando um adulto.",
    "Ergue os braços para expressar “grande”, imitando um adulto.",
    "Oferece algo, mas nem sempre entrega.",
    "Abraça, acaricia e beija familiares.",
    "Responde ao próprio nome, olhando ou estendendo o braço para ser pego.",
    "Aperta ou sacode um brinquedo para produzir sons, em imitação.",
    "Manipula brinquedo ou objeto.",
    "Estende um brinquedo ou objeto a um adulto e o entrega.",
    "Imita movimentos de outras crianças ao brincar."
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Socialização 0 a 1 ano        </Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => navigation.navigate('Linguagem01')} style={styles.navButton}>
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
                  color='#217744'
                  value="sim"
                  status={checked[question] === 'sim' ? 'checked' : 'unchecked'}
                  onPress={() => handleRadioChange(question, 'sim')}
                />
                <Text style={styles.radioButtonLabel}>Sim</Text>
              </View>
              <View style={styles.radioButtonRow}>
                <RadioButton
                  color='#217744'
                  value="nao"
                  status={checked[question] === 'nao' ? 'checked' : 'unchecked'}
                  onPress={() => handleRadioChange(question, 'nao')}
                />
                <Text style={styles.radioButtonLabel}>Não</Text>
              </View>
              <View style={styles.radioButtonRow}>
                <RadioButton
                  color='#217744'
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
    padding: 35,
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

export default Socializacao01;