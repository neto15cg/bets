import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import Input from 'components/Input/input';
import Colors from 'util/Colors';
import Button from 'components/Button';
// import { Header } from 'react-navigation-stack';
// import Constants from 'expo-constants';

import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default function Login(props: Props) {
  return (
    <KeyboardAvoidingView
      // keyboardVerticalOffset={Header.HEIGHT + Constants.statusBarHeight + 20}
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
        contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        style={{ flex: 1, width: '100%' }}
      >
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 64, marginBottom: 30, fontWeight: 'bold', color: Colors.title }}>BIG BET's</Text>
        </View>
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
          placeholder={'Digite sua senha'}
          inputType={'password'}
        ></Input>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button onPress={() => console.log('Clicado')} title={'ENTRAR'}></Button>
          <Button
            style={{ backgroundColor: Colors.backgroundThirty }}
            onPress={() => props.navigation.navigate('Register')}
            title={'CADASTRAR'}
          ></Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
