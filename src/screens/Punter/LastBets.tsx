import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import Colors from 'util/Colors';

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default class LastBets extends Component<Props> {
  handleGetColor = (status: string) => {
    switch (status) {
      case 'em-aberto':
        return Colors.attention;
      case 'acertou':
        return Colors.primary;
      case 'errou':
        return Colors.error;
      default:
        return Colors.title;
    }
  };

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
                key={item.codigo}
                style={{
                  width: '90%',
                  minHeight: 200,
                  backgroundColor: Colors.backgroundSecundary,
                  borderRadius: 10,
                  elevation: 3,
                  margin: 5,
                }}
                onPress={() => this.props.navigation.navigate('BetsPunter')}
              >
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                  <View
                    style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Text style={{ fontSize: 20, color: Colors.title, fontWeight: 'bold' }}>
                      Torneiro do {item.nome}
                    </Text>
                  </View>
                  <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 16, color: this.handleGetColor(item.status) }}>
                      Situação: {item.status}
                    </Text>
                    {item.status === 'acertou' ? (
                      <Text style={{ fontSize: 16, color: Colors.subTitle }}>
                        Valor ganho R${item.valorGanho.toFixed(2)}
                      </Text>
                    ) : (
                      undefined
                    )}
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Código da aposta #{item.codigo}</Text>
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
    codigo: 'POW90',
    nome: 'Bairro Conquista 6',
    local: 'Quadra do Bairro Conquista 6',
    data: '10/10/2010 12:53:00',
    valorGanho: 60,
    status: 'acertou',
  },
  {
    codigo: 'XD12D',
    nome: 'Bairro Campinhos',
    local: 'Quadra do Bairro Campinhos',
    data: '10/10/2010 12:53:00',
    valorGanho: 0,
    status: 'em-aberto',
  },
  {
    codigo: 'E23AC',
    nome: 'Bairro Panorama',
    local: 'Quadra do Bairro Panorama',
    data: '10/10/2010 12:53:00',
    valorGanho: 0,
    status: 'errou',
  },
];
