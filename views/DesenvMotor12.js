import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';

const DesenvMotor12 = ({ navigation }) => {
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
    
    "Sobe escadas engatinhando.",
    "Coloca-se em pé, estando sentado.",
    "Rola uma bola imitando um adulto.",
    "Sobe em uma cadeira de adulto, vira-se e senta.",
    "Coloca 4 aros em uma pequena estaca.",
    "Retira pinos de 2,5 cm de uma prancha ou tabuleiro.",
    "Encaixa pinos de 2,5 cm em uma prancha de encaixe.",
    "Constrói uma torre de 3 blocos.",
    "Faz traços no papel com lápis ou lápis de cera.",
    "Anda sozinho.",
    "Desce escadas sentado, colocando primeiro os pés.",
    "Senta-se em uma cadeirinha.",
    "Agacha-se e volta a ficar em pé.",
    "Empurra e puxa brinquedos ao andar.",
    "Usa cadeira ou cavalo de balanço.",
    "Sobe escadas com ajuda.",
    "Dobra o corpo sem cair para apanhar objetos no chão.",
    "Imita um movimento circular."
      
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Desenvolvimento Motor 1 a 2 anos</Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => navigation.goBack('AutoCuidados12')} style={styles.navButton}>
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
    alignItems: 'flex-end',
    marginTop: 20,
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
  exitButton: {
    backgroundColor: '#FF0000', // Cor vermelha para o botão "Sair"
    padding: 15,
    borderRadius: 5,
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

export default DesenvMotor12;