import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Endereco {
  cep?: string;
  logradouro?: string;
  complemento?: string;         //o ? diz que o campo é opcional
  bairro?: string;
  localidade?: string;
  uf?: string;
}

export default function App() {
  const [MeuEnd, setMeuEnd] = useState<Endereco>({});

  useEffect(() => {
    getCep();
  }, []);

  async function getCep() {
    try {
      const response = await axios.get<Endereco>("https://viacep.com.br/ws/78555000/json/",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMeuEnd(response.data);
      setMeuEnd(response.data);
    } catch (erro) {
      console.error(erro);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Meu endereço é: {MeuEnd.logradouro ?? "Carregando..."}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
