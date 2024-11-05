import React, { useState, useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { DataTable, TextInput, Modal, Portal, IconButton, Button } from 'react-native-paper';
import axios from 'axios';

const API_URL = 'http://172.16.6.206:3001'; // Certifique-se de ajustar para o IP correto do servidor

const HomeScreen = () => {
  const [visible, setVisible] = useState({
    addUser: false,
    editUser: false,
    deleteUser: false
  });
  const [currentUser, setCurrentUser] = useState({ id: '', nome: '', senha: '' });
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ nome: '', email: '', senha: '' });

  // Função para buscar todos os usuários
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}/usuarios`);
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error.message);
    }
  };

  // Função para adicionar um novo usuário
  const addUser = async () => {
    try {
      await axios.post(`${API_URL}/usuario/inserir`, newUser);
      setNewUser({ nome: '', senha: '' });
      hideModal('addUser');
      fetchUsers();
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error.message);
    }
  };

  // Função para atualizar um usuário
  const updateUser = async () => {
    try {
      await axios.put(`${API_URL}/usuario/atualizar/${currentUser.id}`, currentUser);
      setCurrentUser({ id: '', nome: '', senha: '' });
      hideModal('editUser');
      fetchUsers();
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error.message);
    }
  };

  // Função para deletar um usuário
  const deleteUser = async () => {
    try {
      await axios.delete(`${API_URL}/usuario/deletar/${currentUser.id}`);
      setCurrentUser({ id: '', nome: '', senha: '' });
      hideModal('deleteUser');
      fetchUsers();
    } catch (error) {
      console.error('Erro ao deletar usuário:', error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Funções para exibir e esconder os modais
  const showModal = (type) => setVisible({ ...visible, [type]: true });
  const hideModal = (type) => setVisible({ ...visible, [type]: false });

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <IconButton icon="plus" size={24} onPress={() => showModal('addUser')} />
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nome</DataTable.Title>
            <DataTable.Title>Senha</DataTable.Title>
            <DataTable.Title>Ações</DataTable.Title>
          </DataTable.Header>
          {users.length > 0 ? (
            users.map(user => (
              <DataTable.Row key={user.id}>
                <DataTable.Cell>{user.nome}</DataTable.Cell>
                <DataTable.Cell>{user.senha}</DataTable.Cell>
                <DataTable.Cell>
                  <IconButton
                    icon="pencil"
                    size={20}
                    onPress={() => {
                      setCurrentUser(user);
                      showModal('editUser');
                    }}
                  />
                  <IconButton
                    icon="delete"
                    size={20}
                    onPress={() => {
                      setCurrentUser(user);
                      showModal('deleteUser');
                    }}
                  />
                </DataTable.Cell>
              </DataTable.Row>
            ))
          ) : (
            <DataTable.Row>
              <DataTable.Cell>Nenhum usuário encontrado</DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>

        {/* Modal para adicionar usuário */}
        <Portal>
          <Modal visible={visible.addUser} onDismiss={() => hideModal('addUser')} contentContainerStyle={styles.modal}>
            <TextInput
              label="Nome"
              mode="outlined"
              value={newUser.nome}
              onChangeText={text => setNewUser(prev => ({ ...prev, nome: text }))}
            />
            <TextInput
              label="Senha"
              mode="outlined"
              secureTextEntry
              value={newUser.senha}
              onChangeText={text => setNewUser(prev => ({ ...prev, senha: text }))}
            />
            <Button mode="contained" onPress={addUser}>Adicionar</Button>
            <IconButton icon="cancel" size={24} onPress={() => hideModal('addUser')} />
          </Modal>
        </Portal>

        {/* Modal para editar usuário */}
        <Portal>
          <Modal visible={visible.editUser} onDismiss={() => hideModal('editUser')} contentContainerStyle={styles.modal}>
            <TextInput
              label="Nome"
              mode="outlined"
              value={currentUser.nome}
              onChangeText={text => setCurrentUser(prev => ({ ...prev, nome: text }))}
            />
            <TextInput
              label="Senha"
              mode="outlined"
              secureTextEntry
              value={currentUser.senha}
              onChangeText={text => setCurrentUser(prev => ({ ...prev, senha: text }))}
            />
            <Button mode="contained" onPress={updateUser}>Salvar</Button>
            <IconButton icon="cancel" size={24} onPress={() => hideModal('editUser')} />
          </Modal>
        </Portal>

        {/* Modal para deletar usuário */}
        <Portal>
          <Modal visible={visible.deleteUser} onDismiss={() => hideModal('deleteUser')} contentContainerStyle={styles.modal}>
            <TextInput label="Nome" mode="outlined" value={currentUser.nome} disabled />
            <Button mode="contained" onPress={deleteUser}>Deletar</Button>
            <IconButton icon="cancel" size={24} onPress={() => hideModal('deleteUser')} />
          </Modal>
        </Portal>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
  },
});

export default HomeScreen;
