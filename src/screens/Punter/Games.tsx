import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { RadioButton } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import Colors from 'util/Colors';
import Input from 'components/Input/input';
import Button from 'components/Button';

export interface Props {
  navigation: NavigationScreenProp<NavigationState & NavigationParams>;
}

export default class LastBets extends Component<Props> {
  static navigationOptions = {
    title: 'Jogos',
    headerStyle: {
      backgroundColor: Colors.backgroundSecundary,
    },
  };
  state = {
    bets: [],
    visible: false,
    selectedGame: undefined,
    type: 'casa-ganha',
    placar: {
      casa: '0',
      visita: '0',
    },

    jogos: [
      {
        game: 1,
        data: '10/10/2010 12:53:00',
        local: 'Quadra do bairro candeias',
        bet: undefined,
      },
      {
        game: 2,
        data: '10/10/2010 12:54:00',
        local: 'Quadra do bairro candeias',
        bet: undefined,
      },
      {
        game: 3,
        data: '10/10/2010 12:55:00',
        local: 'Quadra do bairro candeias',
        bet: undefined,
      },
      {
        game: 4,
        data: '10/10/2010 12:55:00',
        local: 'Quadra do bairro candeias',
        bet: undefined,
      },
    ],
  };

  handleSelectGame = (game: any) => {
    this.setState({ selectedGame: game, visible: true });
  };

  handleBetting = () => {
    const { selectedGame, type, placar, bets, jogos } = this.state;
    const bet = {
      ...(selectedGame as any),
      type,
      placar,
    };

    const newBets = [...bets, bet];
    const newGames = jogos.map(item => {
      if (bet.game === item.game) {
        return {
          ...item,
          bet: bet,
        };
      }
      return { ...item };
    });

    this.setState({
      visible: false,
      selectedGame: undefined,
      type: 'casa-ganha',
      placar: {
        casa: '0',
        visita: '0',
      },
      jogos: newGames,
      bets: newBets,
    });
  };

  handleReturnPalpite = (bet: any) => {
    if (bet) {
      if (bet.type === 'casa-ganha') {
        return 'Casa Ganha';
      }
      if (bet.type === 'visitante-ganha') {
        return 'Visitante Ganha';
      }
      if (bet.type === 'empate') {
        return 'Empate';
      }
      if (bet.type === 'placar') {
        return `${'Casa: ' + bet.placar.casa + ' X Visita: ' + bet.placar.visita}`;
      }
    }
    return '';
  };

  handleRemoveBet = (bet: any) => {
    const { bets, jogos } = this.state;

    const newBets = bets.filter((item: any) => {
      return bet.game !== item.game;
    });

    const newGames = jogos.map(item => {
      if (bet.game === item.game) {
        return {
          ...item,
          bet: undefined,
        };
      }
      return { ...item };
    });

    this.setState({ bets: newBets, jogos: newGames });
  };

  render() {
    const { visible, type, placar, jogos, bets } = this.state;
    const { casa, visita } = placar;
    const { navigation } = this.props;

    return (
      <View style={{ height: '95%', marginTop: 30, alignItems: 'center', justifyContent: 'center' }}>
        <Modal transparent={true} visible={visible} onRequestClose={() => this.setState({ visible: false })}>
          <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={() => {
              this.setState({ visible: false });
            }}
          >
            <View style={{ flex: 1, backgroundColor: '#000', opacity: 0.3 }}></View>
          </TouchableWithoutFeedback>
          <View
            style={{
              flex: 3,
              backgroundColor: '#FFF',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                padding: 10,
              }}
            >
              <Text style={{ color: Colors.title, fontSize: 32, textAlign: 'center' }}>Escolha o resultado</Text>
              <TouchableOpacity
                style={{ alignItems: 'center', justifyContent: 'center', padding: 5 }}
                onPress={() => this.setState({ visible: false })}
              >
                <AntDesign name="close" size={26} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => {
                this.setState({ type: 'casa-ganha' });
              }}
            >
              <RadioButton
                value="casa-ganha"
                status={type === 'casa-ganha' ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({ checked: 'casa-ganha' });
                }}
              />
              <Text style={{ color: Colors.title, fontSize: 16 }}>Casa ganha</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => {
                this.setState({ type: 'visitante-ganha' });
              }}
            >
              <RadioButton
                value="visitante-ganha"
                status={type === 'visitante-ganha' ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({ type: 'visitante-ganha' });
                }}
              />
              <Text style={{ color: Colors.title, fontSize: 16 }}>Visitante Ganha</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => {
                this.setState({ type: 'empate' });
              }}
            >
              <RadioButton
                value="empate"
                status={type === 'empate' ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({ type: 'empate' });
                }}
              />
              <Text style={{ color: Colors.title, fontSize: 16 }}>Empate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => {
                this.setState({ type: 'placar' });
              }}
            >
              <RadioButton
                value="placar"
                status={type === 'placar' ? 'checked' : 'unchecked'}
                onPress={() => {
                  this.setState({ type: 'placar' });
                }}
              />
              <Text style={{ color: Colors.title, fontSize: 16 }}>Definir placar</Text>
            </TouchableOpacity>

            {type === 'placar' ? (
              <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                  <Input
                    style={{
                      width: '80%',
                      height: 80,
                      justifyContent: 'center',
                      backgroundColor: Colors.backgroundSecundary,
                      borderRadius: 10,
                      padding: 10,
                    }}
                    label="Casa"
                    placeholder={'Casa'}
                    inputType={'number'}
                    keyboardType={'number'}
                    onChange={(text: any) => this.setState({ placar: { ...this.state.placar, casa: text } })}
                    value={(casa && casa.toString()) || casa}
                  ></Input>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <AntDesign name="close" size={32} />
                </View>
                <View style={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                  <Input
                    style={{
                      width: '80%',
                      height: 80,
                      justifyContent: 'center',
                      backgroundColor: Colors.backgroundSecundary,
                      borderRadius: 10,
                      padding: 10,
                    }}
                    label="Visita"
                    placeholder={'Visita'}
                    inputType={'number'}
                    keyboardType={'number'}
                    onChange={(text: any) => this.setState({ placar: { ...placar, visita: text } })}
                    value={(visita && visita.toString()) || visita}
                  ></Input>
                </View>
              </View>
            ) : (
              undefined
            )}
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
              <Button onPress={() => this.handleBetting()} title={'APOSTAR'}></Button>
            </View>
          </View>
        </Modal>
        {bets.length > 0 ? (
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: Colors.attention,
              position: 'absolute',
              bottom: 10,
              right: 10,
              zIndex: 99,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 2,
              margin: 5,
            }}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ color: Colors.title, fontWeight: 'bold' }}>Finalizar</Text>
          </TouchableOpacity>
        ) : (
          undefined
        )}
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          style={{ flex: 1, width: '100%' }}
        >
          <View style={{ width: '80%', marginVertical: 15 }}>
            <Text style={{ flexWrap: 'wrap', fontSize: 22, color: Colors.title, textAlign: 'center' }}>
              Clique para selecionar os jogos que deseja apostar.
            </Text>
          </View>

          {jogos.map(item => {
            return (
              <TouchableOpacity
                key={item.game}
                style={{
                  width: '90%',
                  height: 150,
                  backgroundColor: item.bet ? Colors.primary : Colors.backgroundSecundary,
                  borderRadius: 10,
                  elevation: 3,
                  margin: 5,
                }}
                disabled={item.bet ? true : false}
                onPress={() => this.handleSelectGame(item)}
              >
                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                  <View
                    style={{ flex: 4, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
                  >
                    <Text style={{ fontSize: 22, color: Colors.title, fontWeight: 'bold' }}>#{item.game}</Text>
                    <Text style={{ fontSize: 14, color: Colors.title }}>10/10/2010 12:53:00</Text>
                  </View>
                  <View style={{ flex: 4, justifyContent: 'space-evenly' }}>
                    {item.bet ? (
                      <Text style={{ fontSize: 16, color: Colors.subTitle }}>
                        Palpite: {this.handleReturnPalpite(item.bet)}
                      </Text>
                    ) : (
                      undefined
                    )}
                    <Text style={{ fontSize: 16, color: Colors.subTitle }}>Local: {item.local}</Text>
                  </View>
                  {item.bet ? (
                    <TouchableOpacity
                      style={{
                        flex: 2,
                        width: '100%',
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#d15656',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      onPress={() => this.handleRemoveBet(item.bet)}
                    >
                      <Text style={{ color: '#fff', fontSize: 16 }}>Remover palpite</Text>
                    </TouchableOpacity>
                  ) : (
                    undefined
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
