import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import Colors from 'util/Colors';

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default class Home extends Component<Props> {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginVertical: 40 }}
        style={{ flex: 1, width: '100%' }}
      >
        <View style={{ width: '90%' }}>
          <Text style={{ fontSize: 32, color: Colors.title, fontWeight: 'bold' }}>Olá,</Text>
          <Text style={{ fontSize: 26, color: Colors.subTitle }}>João da Silva</Text>
        </View>

        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
          <Text style={{ fontSize: 26, color: Colors.title }}>Rodadas da semana</Text>
          <TouchableOpacity
            style={{
              width: '90%',
              height: 150,
              backgroundColor: Colors.backgroundSecundary,
              borderRadius: 10,
              elevation: 3,
              marginHorizontal: 5,
              marginBottom: 5,
              marginTop: 20,
            }}
            onPress={() => this.props.navigation.navigate('GamesPunter')}
          >
            <View style={{ flex: 1, paddingHorizontal: 20 }}>
              <View style={{ flex: 3, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 22, color: Colors.title, fontWeight: 'bold' }}>#32</Text>
                <Text style={{ fontSize: 14, color: Colors.title }}>10/10/2010 12:53:00</Text>
              </View>
              <View style={{ flex: 7, justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: 16, color: Colors.subTitle }}>Quantidade de times: 16</Text>
                <Text style={{ fontSize: 16, color: Colors.subTitle }}>Quantidade de jogos: 8</Text>
                <Text style={{ fontSize: 16, color: Colors.subTitle }}>Local: Quadra do Bairro Candeias</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
