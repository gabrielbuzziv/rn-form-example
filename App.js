/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView style={styles.form} behavior="padding" enabled={Platform.OS === 'ios'}>
          <ScrollView style={styles.inputs}>
            <TextInput style={styles.input} placeholder="Nome" />
            <TextInput style={styles.input} placeholder="E-mail" />
            <TextInput style={styles.input} placeholder="Telefone" />
            <TextInput style={styles.input} placeholder="Data de Nascimento" />
            <TextInput style={styles.input} placeholder="Telefone" />
            <TextInput style={styles.input} placeholder="Empresa" />
            <TextInput style={styles.input} placeholder="Cargo" />
            <TextInput style={styles.input} placeholder="Endereço" />
            <TextInput style={styles.input} placeholder="Número" />
            <TextInput style={styles.input} placeholder="Bairro" />
            <TextInput style={styles.input} placeholder="Cidade" />
            <TextInput style={styles.input} placeholder="Estado" />
            <TextInput style={styles.input} placeholder="Pai" />
            <TextInput style={styles.input} placeholder="Mãe" />
            <TextInput style={styles.input} placeholder="Irmã" />
            <TextInput style={styles.input} placeholder="Filho" />
            <TextInput style={styles.input} placeholder="Avô" />
            <TextInput style={styles.input} placeholder="Avó" />
            <TextInput style={styles.input} placeholder="Tio" />
            <TextInput style={styles.input} placeholder="Tia" />
            <TextInput style={styles.input} placeholder="Primo" />
            <TextInput style={styles.input} placeholder="Prima" />
            <TextInput style={styles.input} placeholder="Padrinho" />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = new StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    flex: 1,
    padding: 20,
  },

  form: {
    backgroundColor: '#abeafe',
    flex: 1,
  },

  inputs: {
    backgroundColor: '#f60',
    flex: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
});
