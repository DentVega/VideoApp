import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        { borderTopColor: props.color ? props.color : "#eaeaea" }
      ]}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 1
  }
});
