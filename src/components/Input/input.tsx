import React, { Component, ReactElement } from 'react';
import { ReturnKeyTypeOptions, View, Text, TextInput } from 'react-native';
import Colors from 'util/Colors';

export interface Props {
  label: string;
  Icon?: any;
  IconRight?: any;
  keyboardType?: any;
  autoCapitalize?: any;
  inputType?: 'textarea' | 'text' | 'number' | 'password' | 'email' | 'phone';
  onChange?: (a: any) => void;
  value?: string;
  onSubmitEditing?: (a: any) => void;
  returnKeyLabel?: string;
  returnKeyType?: ReturnKeyTypeOptions;
  error?: string;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  style?: any;
  multiline?: boolean;
  autoCorrect?: boolean;
  editable?: boolean;
  maxLength?: number;
  placeholder?: string;
}

export enum types {
  textarea = 'default',
  text = 'default',
  number = 'numeric',
  email = 'email-address',
  phone = 'phone-pad',
}

export default class CustomInput extends Component<Props> {
  state = {
    focused: false,
  };

  render(): ReactElement {
    const {
      inputType,
      onChange,
      value,
      autoCapitalize,
      onSubmitEditing,
      returnKeyLabel,
      error,
      onFocus,
      onBlur,
      style,
      multiline,
      autoCorrect,
      returnKeyType,
      editable,
      maxLength,
      placeholder,
    } = this.props;

    return (
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <View
          style={{
            ...style,
          }}
        >
          <TextInput
            style={{ width: '100%', height: '80%' }}
            onFocus={(e: any): void => {
              this.setState({ focused: true });
              onFocus && onFocus(e);
            }}
            onBlur={(e: any): void => {
              this.setState({ focused: false });
              onBlur && onBlur(e);
            }}
            placeholder={placeholder}
            placeholderTextColor={Colors.subTitle}
            // @ts-ignore
            keyboardType={(types[inputType as any] as any) || 'default'}
            onChangeText={onChange}
            autoCapitalize={autoCapitalize}
            value={value}
            onSubmitEditing={onSubmitEditing}
            returnKeyLabel={returnKeyLabel}
            returnKeyType={returnKeyType}
            multiline={multiline}
            secureTextEntry={inputType === 'password'}
            autoCorrect={autoCorrect}
            editable={editable}
            maxLength={maxLength}
          />
        </View>
        {error && (
          <Text
            style={{
              marginLeft: '12%',
              fontSize: 10,
              color: 'red',
              fontWeight: 'bold',
              marginTop: 5,
              alignSelf: 'flex-start',
            }}
          >
            {error}
          </Text>
        )}
      </View>
    );
  }
}
