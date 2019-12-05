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
          {[1, 2, 3, 4, 5].map(item => {
            return (
              <TouchableOpacity
                key={item}
                style={{
                  width: '90%',
                  height: 150,
                  backgroundColor: Colors.backgroundSecundary,
                  borderRadius: 10,
                  elevation: 3,
                  margin: 5,
                }}
                onPress={() => this.props.navigation.navigate('GamesPunter')}
              >
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                  <View
                    style={{ flex: 3, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Text style={{ fontSize: 22, color: Colors.title, fontWeight: 'bold' }}>#{item}</Text>
                    <Text style={{ fontSize: 14, color: Colors.title }}>10/10/2010 12:53:00</Text>
                  </View>
                  <View style={{ flex: 7, justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Quantidade de times: {item * 2}</Text>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Quantidade de jogos: {item}</Text>
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Local: Quadra do Bairro Candeias</Text>
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
