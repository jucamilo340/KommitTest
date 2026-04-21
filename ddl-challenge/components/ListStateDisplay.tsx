import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ListStateDisplayProps {
  headValue: string | null;
  tailValue: string | null;
  size: number;
}

function ListStateDisplayComponent({
  headValue,
  tailValue,
  size,
}: ListStateDisplayProps) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>HEAD</Text>
        <Text style={[styles.value, headValue && styles.headValue]}>
          {headValue ?? "null"}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <Text style={styles.label}>SIZE</Text>
        <Text style={styles.value}>{size}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.item}>
        <Text style={styles.label}>TAIL</Text>
        <Text style={[styles.value, tailValue && styles.tailValue]}>
          {tailValue ?? "null"}
        </Text>
      </View>
    </View>
  );
}

export const ListStateDisplay = React.memo(ListStateDisplayComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#181825",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#313244",
    marginHorizontal: 16,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  item: {
    flex: 1,
    alignItems: "center",
    gap: 4,
  },
  label: {
    fontSize: 10,
    fontWeight: "800",
    color: "#6C7086",
    letterSpacing: 1.2,
  },
  value: {
    fontSize: 15,
    fontWeight: "700",
    color: "#585B70",
    fontFamily: "monospace",
  },
  headValue: {
    color: "#A6E3A1",
  },
  tailValue: {
    color: "#F38BA8",
  },
  divider: {
    width: 1,
    backgroundColor: "#313244",
  },
});