import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ArrowConnectorComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.arrow}>⇄</Text>
    </View>
  );
}

export const ArrowConnector = React.memo(ArrowConnectorComponent);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 2,
    paddingBottom: 18,
  },
  arrow: {
    fontSize: 18,
    color: "#585B70",
  },
});