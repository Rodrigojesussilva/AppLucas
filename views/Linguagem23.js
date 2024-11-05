import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Linguagem23 = ({ navigation }) => {
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
    "Combina substantivos ou adjetivos e substantivos em frases de 2 palavras.",
    "Combina substantivo e verbo em frases de 2 palavras.",
    "Usa uma palavra para indicar que quer ir ao banheiro.",
    "Combina verbo ou substantivo com 'lá' e 'aqui' em frases de 2 palavras.",
    "Combina 2 palavras para expressar posse.",
    "Emprega 'não' na fala.",
    "Responde à pergunta 'O que .... está fazendo?' para atividade habituais.",
    "Responde a perguntas tipo 'Onde está objeto?'",
    "Nomeia sons ambientais familiares.",
    "Dá mais de um objeto quando se usa a forma plural na solicitação.",
    "Ao falar, refere-se a si próprio pelo nome.",
    "Aponta para figuras de objetos comuns descritos pelo uso (até 10) ('O que seusa pra comer? = colher')",
    "Mostra a idade pelos dedos.",
    "Diz seu sexo quando solicitado.",
    "Obedece à seqüência de duas ordens relacionadas.",
    "Usa a forma do verbo no gerúndio.",
    "Emprega formas regulares no plural.",
    "Emprega algumas formas irregulares de verbos no passado de forma sistemática.",
    "Faz perguntas do tipo 'O que é isso?'.",
    "Controla o volume da voz 90% das vezes.",
    "Usa 'este / esta' e 'aquele / aquela' na fala.",
    "Emprega 'é' e 'está' em frases simples.",
    "Diz 'eu', 'mim', 'meu' ao invés do próprio nome.",
    "Aponta objetos e diz que eles não são outras coisas.",
    "Responde à pergunta 'Quem?' dando um nome.",
    "Emprega as formas possessivas dos substantivos.",
    "Usa artigos ao falar.",
    "Usa substantivos que indicam grupo ou categoria.",
    "Usa os verbos 'ser', 'estar' e 'ter' no presente com poucos erros.",
    "Diz se os objetos estão abertos ou fechados."
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Linguagem       2 a 3 anos</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => navigation.goBack('Socializacao23')} style={styles.navButton}>
            <Text style={styles.navButtonText}>{"<"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cognicao23')} style={styles.navButton}>
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

export default Linguagem23;