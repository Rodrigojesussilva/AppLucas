import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Importe suas telas
import HomeScreen from './views/HomeScreen';
import CadastroUser from './views/CadastroUser';
import Login from './views/Login';
import ForgotPassword from './views/ForgotPassword';
import CadastroAluno from './views/CadastroAluno';
import Feedback from './views/FeedBack';
import Socializacao01 from './views/Socializacao01';
import Socializacao12 from './views/Socializacao12';
import WelcomeScreen from './views/WelcomeScreen';
import GerenciamentoUser from './views/GerenciamentoUser';
import Linguagem01 from './views/Linguagem01';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Stack Navigator para HomeScreen, Login e CadastroUser
function AuthStack({ setIsLoggedIn }) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Login" 
        options={{ headerShown: false }} 
      >
        {props => <Login {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Stack.Screen>
      <Stack.Screen 
        name="CadastroUser" 
        component={CadastroUser} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPassword} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="WelcomeScreen" 
        component={WelcomeScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

// Stack Navigator para telas acessíveis pelo Drawer
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="WelcomeScreen" 
        component={WelcomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="CadastroAluno" 
        component={CadastroAluno} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Feedback" 
        component={Feedback} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Socializacao01" 
        component={Socializacao01} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Linguagem01" 
        component={Linguagem01} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Socializacao12" 
        component={Socializacao12} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="GerenciamentoUser" 
        component={GerenciamentoUser} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

// Tela de Logout
function LogoutScreen({ setIsLoggedIn, navigation }) {
  useEffect(() => {
    // Quando a tela é focada, desloga o usuário e navega para a tela de Login
    const unsubscribe = navigation.addListener('focus', () => {
      setIsLoggedIn(false);
    });

    // Limpa o listener quando o componente é desmontado
    return unsubscribe;
  }, [navigation]);

  return null; // Retorna nada, pois não precisamos renderizar uma tela visível
}

// Drawer Navigator
function DrawerNavigator({ setIsLoggedIn }) {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio" 
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#FFDD59' },
        headerTitle: '',
      }}
    >
      <Drawer.Screen name="Inicio" component={MainStack} />
      <Drawer.Screen name="Gerenciar Usuários" component={GerenciamentoUser} />
      <Drawer.Screen name="Configurações" component={Feedback} />
      <Drawer.Screen name="Cadastro" component={CadastroUser} />
      <Drawer.Screen name="Socialização 0 a 1 ano" component={Socializacao01} />
      <Drawer.Screen
        name="Sair"
        options={{
          headerShown: false,
          drawerItemStyle: { marginTop: 20 },
        }}
      >
        {props => <LogoutScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {isLoggedIn ? (
          <DrawerNavigator setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <AuthStack setIsLoggedIn={setIsLoggedIn} />
        )}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
