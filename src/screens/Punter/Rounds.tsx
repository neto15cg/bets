import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import Colors from 'util/Colors';

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default class Rounds extends Component<Props> {
  render() {
    return (
      <View style={{ height: '95%', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          style={{ flex: 1, width: '100%' }}
        >
          {rodadas.map(item => {
            return (
              <TouchableOpacity
                key={item.nome}
                style={{
                  width: '90%',
                  minHeight: 200,
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
                  <View style={{ flex: 4, alignItems: 'center', flexDirection: 'row', width: '100%' }}>
                    <Text style={{ fontSize: 20, color: Colors.title, fontWeight: 'bold' }}>Torneiro do </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: Colors.subTitle,
                        fontWeight: 'bold',
                        flexWrap: 'wrap',
                        width: '70%',
                      }}
                    >
                      {item.nome}
                    </Text>
                  </View>
                  <View style={{ flex: 6, justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Quantidade de times: {item.qtdTimes}</Text>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Quantidade de jogos: {item.qtdJogos}</Text>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Local: {item.local}</Text>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Data: {item.data}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const rodadas = [
  {
    nome: 'Bairro Campinhos',
    local: 'Quadra do Bairro Campinhos',
    data: '10/10/2010 12:53:00',
    qtdTimes: 16,
    qtdJogos: 8,
    valorGanho: 0,
    status: 'pendente',
  },
  {
    nome: 'Bairro Panorama',
    local: 'Quadra do Bairro Panorama',
    data: '10/10/2010 12:53:00',
    qtdTimes: 16,
    qtdJogos: 8,
    valorGanho: 0,
    status: 'perdeu',
  },
  {
    nome: 'Bairro Conquista 6',
    local: 'Quadra do Bairro Conquista 6',
    data: '10/10/2010 12:53:00',
    qtdTimes: 16,
    qtdJogos: 8,
    valorGanho: 60,
    status: 'ganhou',
  },
  {
    nome: 'Bairro Brasil',
    local: 'Quadra do Bairro Brasil',
    data: '10/10/2010 12:53:00',
    qtdTimes: 16,
    qtdJogos: 8,
    valorGanho: 78,
    status: 'ganhou',
  },
];
