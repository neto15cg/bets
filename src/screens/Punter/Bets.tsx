import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import Colors from 'util/Colors';

export default class Bets extends Component {
  static navigationOptions = {
    title: 'Apostas',
    headerStyle: {
      backgroundColor: Colors.backgroundSecundary,
    },
  };

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
          {apostas.map((item: any, index: number) => {
            return (
              <View
                key={index}
                style={{
                  width: '90%',
                  height: 150,
                  backgroundColor: Colors.backgroundSecundary,
                  borderRadius: 10,
                  elevation: 3,
                  margin: 5,
                }}
              >
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                  <View
                    style={{ flex: 3, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Text style={{ fontSize: 22, color: Colors.title, fontWeight: 'bold' }}>
                      R$ {item.valor.toFixed(2)}
                    </Text>
                    <Text style={{ fontSize: 14, color: this.handleGetColor(item.status) }}>{item.status}</Text>
                  </View>
                  <View style={{ flex: 7, justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Times: {item.times} </Text>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Data do Jogo: {item.data}</Text>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Palpite: {item.palpite}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const apostas = [
  {
    status: 'em-aberto',
    valor: 12.5,
    data: '10/10/2010 12:55',
    times: 'Brangantino X Corinthians',
    palpite: 'Casa Ganha',
  },
  {
    status: 'acertou',
    valor: 32.5,
    data: '10/10/2010 14:00',
    times: 'Santos X São Paulo',
    palpite: 'Visitante Ganha',
  },
  {
    status: 'errou',
    valor: 13.0,
    data: '11/10/2010 12:55',
    times: 'Palmeiras X Ituano',
    palpite: 'Empante',
  },
];
