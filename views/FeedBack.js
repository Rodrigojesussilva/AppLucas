import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const Feedback = ({ navigation }) => {
  const [tableHead] = useState(['Data', 'Nome', 'Visualizar', 'Data de Nasc.']);
  const [tableData] = useState([
    ['01/01/2023', 'Nome 1', '01/01/2000'],
    ['02/01/2023', 'Nome 2', '02/01/2000'],
    ['03/01/2023', 'Nome 3', '03/01/2000'],
    ['04/01/2023', 'Nome 4', '04/01/2000'],
    ['05/01/2023', 'Nome 5', '05/01/2000'],
    ['06/01/2023', 'Nome 6', '06/01/2000'],
    ['07/01/2023', 'Nome 7', '07/01/2000'],
    ['08/01/2023', 'Nome 8', '08/01/2000'],
    ['09/01/2023', 'Nome 9', '09/01/2000'],
    ['10/01/2023', 'Nome 10', '10/01/2000'],
  ]);

  const recordCount = tableData.length;

  const renderIcon = () => (
    <TouchableOpacity onPress={() => navigation.navigate('DetailScreen')}>
      {/* Substitua 'search_icon.png' pelo nome da sua imagem */}
      <Image source={require('../assets/img/visualizar.png')} style={{ width: 20, height: 20 }} />
    </TouchableOpacity>
  );

  const tableDataWithIcons = tableData.map(row => [row[0], row[1], renderIcon(), row[2]]);

  return (
    <View style={styles.container}>
      {/* Título */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Feed Back</Text>
      </View>

      {/* Tabela */}
      <ScrollView horizontal>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#000' }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
              widthArr={[100, 150, 100, 200]}
            />
            <Rows
              data={tableDataWithIcons}
              textStyle={styles.text}
              widthArr={[100, 150, 100, 200]}
            />
          </Table>
        </View>
      </ScrollView>

      {/* Número de Registro */}
      <View style={styles.recordCountContainer}>
        <Text style={styles.recordCountText}>Nº de Registros: {recordCount}</Text>
      </View>

      {/* Botão Novo Teste */}
      <TouchableOpacity style={styles.newTestButton} onPress={() => navigation.navigate('CadastroAluno')}>
        <Text style={styles.newTestButtonText}>Novo Teste</Text>
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 5,
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  head: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  headText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    margin: 6,
    textAlign: 'center',
  },
  recordCountContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  recordCountText: {
    fontSize: 18,
  },
  newTestButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#217744',
    borderRadius: 5,
    alignItems: 'center',
  },
  newTestButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Feedback;