import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs/src/types";
import { useEffect } from "react";
import {
  Animated,
  GestureResponderEvent,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function CustomTabBarButton(props: BottomTabBarButtonProps) {
  const scaleAnimation = new Animated.Value(0);
  const iconScaleAnimation = new Animated.Value(0.8);

  useEffect(() => {
    let value = 0;
    let iconValue = 0.8;

    if (props.accessibilityState?.selected) {
      value = 1;
      iconValue = 1;
    }

    Animated.spring(scaleAnimation, {
      toValue: value,
      useNativeDriver: true,
    }).start();

    Animated.spring(iconScaleAnimation, {
      toValue: iconValue,
      useNativeDriver: true,
    }).start();
  });

  return (
    <TouchableWithoutFeedback onPress={props.onPress} >
      <View className="flex-1 items-center justify-center" >
        <Animated.View className="w-full h-full" style={{ transform: [{ scale: iconScaleAnimation }] }}>
          {props.children}
        </Animated.View>
        <Animated.View
          style={{ transform: [{ scale: scaleAnimation }] }}
          className="bg-red-500 w-2 h-2 rounded-full"
        ></Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}
