import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CadastroAluno = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sexo, setSexo] = useState('');
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [dataAvaliacao, setDataAvaliacao] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Função para verificar se todos os campos estão preenchidos
    const checkFields = () => {
      if (nome && sexo && dataNascimento) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    };

    checkFields();
  }, [nome, sexo, dataNascimento]);

  const handleSave = () => {
    const idade = calcularIdade(dataNascimento);
    let destino;

    if (idade >= 0 && idade < 1) {
      destino = 'Socializacao01';
    } else if (idade >= 1 && idade < 2) {
      destino = 'Socializacao12';
    } else if (idade >= 2 && idade < 3) {
      destino = 'Socializacao23';
    } else if (idade >= 3 && idade < 4) {
      destino = 'Socializacao34';
    } else if (idade >= 4 && idade < 5) {
      destino = 'Socializacao45';
    } else if (idade >= 5 && idade < 6) {
      destino = 'Socializacao56';
    } 

    navigation.navigate(destino);
  };

  const calcularIdade = (dataNascimento) => {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    const anoNascimento = dataNascimento.getFullYear();
    const mesNascimento = dataNascimento.getMonth();
    const diaNascimento = dataNascimento.getDate();

    let idade = anoAtual - anoNascimento;

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--;
    }

    return idade;
  };

  const handleFeedbacks = () => {
    navigation.navigate('Feedback');
  };

  const handleExit = () => {
    Alert.alert(
      "Você tem certeza que deseja sair?",
      "",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { text: "Sim", onPress: () => navigation.goBack() }
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Cadastro de Aluno</Text>

      {/* Input de Nome */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome completo"
          placeholderTextColor="#000"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      {/* Seleção de Sexo */}
      <View style={styles.radioContainer}>
        <Text style={styles.radioLabel}>Sexo:</Text>
        <TouchableOpacity
          style={[styles.radioButton, sexo === 'Masculino' && styles.radioButtonSelected]}
          onPress={() => setSexo('Masculino')}
        >
          <Text>Masculino</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.radioButton, sexo === 'Feminino' && styles.radioButtonSelected]}
          onPress={() => setSexo('Feminino')}
        >
          <Text>Feminino</Text>
        </TouchableOpacity>
      </View>

      {/* Input de Data de Nascimento */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Data de Nascimento:</Text>
        <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
          <Text>{Intl.DateTimeFormat('pt-BR').format(dataNascimento)}</Text>
        </TouchableOpacity>
      </View>

      {/* DatePicker */}
      {showDatePicker && (
        <DateTimePicker
          value={dataNascimento}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(Platform.OS === 'ios');
            if (date) {
              setDataNascimento(date);
            }
          }}
          locale="pt-BR" // Define a localização como português
        />
      )}

      {/* Data da Avaliação */}
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabel}>Data da Avaliação:</Text>
        <Text>{Intl.DateTimeFormat('pt-BR').format(dataAvaliacao)}</Text>
      </View>

      {/* Botão Gravar */}
      <TouchableOpacity
        style={[styles.saveButton, isButtonDisabled && styles.saveButtonDisabled]}
        onPress={handleSave}
        disabled={isButtonDisabled}
      >
        <Text style={styles.saveButtonText}>Gravar</Text>
      </TouchableOpacity>

      {/* Botão Feedbacks */}
      <TouchableOpacity style={styles.feedbackButton} onPress={handleFeedbacks}>
        <Text style={styles.feedbackButtonText}>Feedbacks</Text>
      </TouchableOpacity>

      {/* Botão Sair */}
     <TouchableOpacity style={styles.exitButton} onPress={handleExit}>
        <Text style={styles.exitButtonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFDE59',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    padding: 40,
    color: '#000',
  },
  input: {
    height: 45,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    fontSize: 15,
    width: 310,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 1,
    fontSize: 18,
  },
  radioLabel: {
    marginRight: 20,
    color: '#000',
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    padding: 10,
    marginTop: -25,
    marginRight: 10,
    backgroundColor: '#fff',
    fontSize: 18,
    width: 150,
    alignItems: 'center',
  },
  radioButtonSelected: {
    backgroundColor: '#FFF',
    borderColor: '#217744',
    borderWidth: 3,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    padding: 5,
  },
  dateLabel: {
    marginRight: 10,
    color: '#000',
  },
  dateInput: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 220,
  },
  saveButton: {
    backgroundColor: '#217744',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  saveButtonDisabled: {
    backgroundColor: '#4DA470',
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  feedbackButton: {
    backgroundColor: '#FFDE59',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  feedbackButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  exitButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#bb0b0b',
    borderRadius: 15,
    width: 100,
    height: 50,
    justifyContent: 'center',
    
  },
  exitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default CadastroAluno;