import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SearchResultData } from "../types";

interface SearchResultProps {
  data: SearchResultData;
  onDismiss: () => void;
}

function SearchResultComponent({ data, onDismiss }: SearchResultProps) {
  const found = data.index !== null;

  return (
    <View style={[styles.container, found ? styles.found : styles.notFound]}>
      <View style={styles.content}>
        <Text style={styles.icon}>{found ? "✓" : "✗"}</Text>
        <Text style={styles.text}>
          {found
            ? `"${data.query}" found at index ${data.index}`
            : `"${data.query}" not found`}
        </Text>
      </View>
      <TouchableOpacity onPress={onDismiss} hitSlop={8}>
        <Text style={styles.dismiss}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

export const SearchResult = React.memo(SearchResultComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
  },
  found: {
    backgroundColor: "#1A2E1A",
    borderColor: "#A6E3A1",
  },
  notFound: {
    backgroundColor: "#2E1A1A",
    borderColor: "#F38BA8",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  icon: {
    fontSize: 16,
    fontWeight: "700",
    color: "#CDD6F4",
  },
  text: {
    fontSize: 13,
    color: "#CDD6F4",
    fontFamily: "monospace",
    flex: 1,
  },
  dismiss: {
    fontSize: 14,
    color: "#6C7086",
    paddingLeft: 8,
  },
});