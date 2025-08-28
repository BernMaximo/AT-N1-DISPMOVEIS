import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface KanyeQuote {
  quote?: string;
}

export default function App() {
  const [kanye, setKanye] = useState<KanyeQuote>({});

  useEffect(() => {
    getKanyeQuote();
  }, []);

  async function getKanyeQuote() {
    try {
      const response = await axios.get<KanyeQuote>("https://api.kanye.rest/");
      setKanye(response.data);
    } catch (erro) {
      console.error(erro);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Kanye diz: {kanye.quote ?? "Carregando..."}</Text>
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
