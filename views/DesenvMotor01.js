import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';

const DesenvMotor01 = ({ navigation }) => {
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
    
    "Alcança um objeto colocado à sua frente (15 a 20 cm.).",
    "Apanha um objeto colocado à sua frente (8 cm.).",
    "Estende os braços em direção a um objeto à sua frente e o apanha.",
    "Alcança um objeto preferido.",
    "Coloca objetos na boca.",
    "Eleva a cabeça e o tronco apoiando-se nos braços, ao estar deitado de barriga para baixo.",
    "Levanta a cabeça e o tronco apoiando-se em um só braço.",
    "Toca e explora objetos com a boca.",
    "Em DV (decúbito ventral, de bruços), vira de lado e mantém esta posição ½ das vezes.",
    "Em DV, vira de costas.",
    "Em DV, move-se para frente o equivalente à sua altura.",   
    "Em DD (decúbito dorsal), rola para o lado.",
    "Em DD, vira de barriga para baixo.",
    "Faz esforço para sentar-se, segurando nos dedos do adulto.",
    "Vira a cabeça com facilidade quando o corpo está apoiado.",
    "Mantém-se sentado por 2 minutos.",
    "Solta um objeto para apanhar outro.",
    "Apanha e deixa cair um objeto propositalmente.",
    "Fica em pé com o máximo de apoio.",
    "Estando em pé com apoio, pula para cima e para baixo.",
    "Engatinha para apanhar um objeto (distante a sua altura).",
    "Senta-se apoiando-se sozinho.",
    "Estando sentado, vira de gatinhas.",
    "Estando em DV consegue sentar-se.",
    "Senta-se sem o apoio das mãos.",
    "Atira objetos ao acaso.",
    "Balança para frente e para trás quando de gatinhas.",
    "Transfere objetos de uma mão para outra quando sentado.",
    "Retém em uma das mãos 2 cubos de 2,5 cm.",
    "Fica de joelhos.",
    "Fica em pé, apoiando-se em algo.",
    "Usa preensão de pinça para pegar objetos.",
    "Engatinha.",
    "Estando de gatinhas, estende uma das mãos para o alto.",
    "Fica em pé com o mínimo de apoio.",
    "Lambe a comida ao redor da boca.",
    "Mantém-se em pé sozinho por um minuto.",
    "Derruba um objeto que está dentro de um recipiente.",
    "Vira várias páginas de um livro ao mesmo tempo.",
    "Escava com uma colher ou pá.",
    "Coloca pequenos objetos dentro do recipiente.",
    "Estando de pé, abaixa-se e senta.",
    "Bate palmas.",
    "Anda com um mínimo de apoio.",
    "Dá alguns passos sem apoio."
      
  ];

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Desenvolvimento Motor   0 a 1 ano </Text>
        <View style={styles.headerButtons}>
          <TouchableOpacity onPress={() => navigation.goBack('AutoCuidados01')} style={styles.navButton}>
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
    fontSize: 22,
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

export default DesenvMotor01;