import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Colors } from "../constants/colors"; // Adjust the import path as necessary
import React from "react";

const SafeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: Colors.backgroundColor
      }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
