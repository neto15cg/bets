import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import Colors from 'util/Colors';

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default class LastBets extends Component<Props> {
  handleGetColor = (status: string) => {
    switch (status) {
      case 'pendente':
        return Colors.attention;
      case 'válido':
        return Colors.primary;
      case 'inválido':
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
          {apostas.map(item => {
            return (
              <View
                key={item.times}
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
                    <Text style={{ fontSize: 22, color: Colors.title, fontWeight: 'bold' }}>#{item.codigo}</Text>
                    <Text style={{ fontSize: 14, color: this.handleGetColor(item.status) }}>{item.status}</Text>
                  </View>
                  <View style={{ flex: 7, justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Rodada: #2</Text>
                    {item.status === 'válido' ? (
                      <Text style={{ fontSize: 16, color: Colors.subTitle }}>Data de validação: {item.data}</Text>
                    ) : (
                      undefined
                    )}
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
    status: 'pendente',
    valor: 12.5,
    data: '10/10/2010 12:55',
    times: 'Brangantino X Corinthians',
    codigo: 'X2E01',
  },
  {
    status: 'inválido',
    valor: 32.5,
    data: '10/10/2010 14:00',
    times: 'Santos X São Paulo',
    codigo: 'X2F01',
  },
  {
    status: 'válido',
    valor: 13.0,
    data: '11/10/2010 12:55',
    times: 'Palmeiras X Ituano',
    codigo: 'X2T11',
  },
];
