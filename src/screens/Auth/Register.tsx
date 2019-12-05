import React, { Component } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import Input from 'components/Input/input';
import Colors from 'util/Colors';
import Button from 'components/Button';
import { Header } from 'react-navigation-stack';
import Constants from 'expo-constants';

export default class Register extends Component {
  static navigationOptions = {
    title: 'Cadastro',
    headerStyle: {
      backgroundColor: Colors.backgroundSecundary,
    },
  };

  render() {
    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={Header.HEIGHT + Constants.statusBarHeight + 20}
        behavior="height"
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: Colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ScrollView
          contentContainerStyle={{ justifyContent: 'flex-start', alignItems: 'center', marginVertical: 10 }}
          style={{ flex: 1, width: '100%' }}
        >
          <Input
            style={{
              width: '90%',
              height: 80,
              justifyContent: 'center',
              backgroundColor: Colors.backgroundSecundary,
              borderRadius: 10,
              padding: 10,
            }}
            label="Email"
            placeholder={'Digite seu nome'}
          ></Input>

          <Input
            style={{
              width: '90%',
              height: 80,
              justifyContent: 'center',
              backgroundColor: Colors.backgroundSecundary,
              borderRadius: 10,
              padding: 10,
            }}
            label="Email"
            placeholder={'Digite seu email'}
          ></Input>

          <Input
            style={{
              width: '90%',
              height: 80,
              justifyContent: 'center',
              backgroundColor: Colors.backgroundSecundary,
              borderRadius: 10,
              padding: 10,
            }}
            label="Email"
            placeholder={'Digite seu CPF'}
          ></Input>
          <Input
            style={{
              width: '90%',
              height: 80,
              justifyContent: 'center',
              backgroundColor: Colors.backgroundSecundary,
              borderRadius: 10,
              padding: 10,
            }}
            label="Email"
            placeholder={'Digite sua senha'}
            inputType={'password'}
          ></Input>
          <Input
            style={{
              width: '90%',
              height: 80,
              justifyContent: 'center',
              backgroundColor: Colors.backgroundSecundary,
              borderRadius: 10,
              padding: 10,
            }}
            label="Email"
            placeholder={'Confirmar senha'}
            inputType={'password'}
          ></Input>
          <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Button onPress={() => console.log('Clicado')} title={'CADASTRAR'}></Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
