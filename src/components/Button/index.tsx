import React, { ReactElement } from 'react';
import { ActivityIndicator, TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import Colors from 'util/Colors';

export interface RoundedProps {
  title: string;
  onPress: (e?: any) => any;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  disabled?: boolean;
}
export default function Rounded(props: RoundedProps): ReactElement {
  const { title, onPress, loading, disabled, style } = props;
  return (
    <TouchableOpacity
      style={[
        {
          width: '40%',
          height: 60,
          backgroundColor: Colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        },
        style,
      ]}
      disabled={loading || disabled}
      onPress={onPress}
    >
      {!loading ? (
        <Text
          style={{
            color: Colors.title,
            fontSize: 18,
            // fontWeight: '600',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Text>
      ) : (
        <ActivityIndicator color={Colors.title} />
      )}
    </TouchableOpacity>
  );
}
