import React, { useState, ReactElement } from 'react';
import { Animated, Easing } from 'react-native';

const FadeInView = (props: any): ReactElement => {
  const [fadeAdmin] = useState(new Animated.Value(0));
  const { children, style, duration } = props;
  React.useEffect(() => {
    Animated.timing(fadeAdmin, {
      toValue: 1,
      duration: duration || 300,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  }, [fadeAdmin, duration]);

  return (
    <Animated.View
      style={{
        opacity: fadeAdmin,
        ...style,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
