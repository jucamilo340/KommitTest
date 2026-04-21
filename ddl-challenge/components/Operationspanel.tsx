import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";

interface OperationsPanelProps {
  onInsertHead: (value: string) => void;
  onInsertTail: (value: string) => void;
  onRemoveAtIndex: (index: number) => void;
  onRemoveDuplicates: () => void;
  onSearch: (value: string) => void;
  onClear: () => void;
}

export function OperationsPanel({
  onInsertHead,
  onInsertTail,
  onRemoveAtIndex,
  onRemoveDuplicates,
  onSearch,
  onClear,
}: OperationsPanelProps) {
  const [valueInput, setValueInput] = useState("");
  const [indexInput, setIndexInput] = useState("");

  const handleInsertHead = useCallback(() => {
    if (!valueInput.trim()) return;
    onInsertHead(valueInput);
    setValueInput("");
    Keyboard.dismiss();
  }, [valueInput, onInsertHead]);

  const handleInsertTail = useCallback(() => {
    if (!valueInput.trim()) return;
    onInsertTail(valueInput);
    setValueInput("");
    Keyboard.dismiss();
  }, [valueInput, onInsertTail]);

  const handleRemoveAtIndex = useCallback(() => {
    const index = parseInt(indexInput, 10);
    if (isNaN(index) || index < 0) return;
    onRemoveAtIndex(index);
    setIndexInput("");
    Keyboard.dismiss();
  }, [indexInput, onRemoveAtIndex]);

  const handleSearch = useCallback(() => {
    if (!valueInput.trim()) return;
    onSearch(valueInput);
    Keyboard.dismiss();
  }, [valueInput, onSearch]);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>VALUE</Text>
        <TextInput
          style={styles.input}
          value={valueInput}
          onChangeText={setValueInput}
          placeholder="Enter a value..."
          placeholderTextColor="#45475A"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.greenButton]}
            onPress={handleInsertHead}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>+ Head</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.pinkButton]}
            onPress={handleInsertTail}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>+ Tail</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.blueButton]}
            onPress={handleSearch}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionLabel}>INDEX</Text>
        <View style={styles.indexRow}>
          <TextInput
            style={[styles.input, styles.indexInput]}
            value={indexInput}
            onChangeText={setIndexInput}
            placeholder="Index..."
            placeholderTextColor="#45475A"
            keyboardType="number-pad"
          />
          <TouchableOpacity
            style={[styles.button, styles.redButton, styles.removeButton]}
            onPress={handleRemoveAtIndex}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.utilRow}>
        <TouchableOpacity
          style={[styles.button, styles.yellowButton, styles.utilButton]}
          onPress={onRemoveDuplicates}
          activeOpacity={0.7}
        >
          <Text style={[styles.buttonText, styles.darkButtonText]}>
            Remove Duplicates
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.grayButton, styles.utilButton]}
          onPress={onClear}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Clear All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    gap: 12,
  },
  section: {
    gap: 8,
  },
  sectionLabel: {
    fontSize: 10,
    fontWeight: "800",
    color: "#6C7086",
    letterSpacing: 1.2,
    marginLeft: 4,
  },
  input: {
    backgroundColor: "#1E1E2E",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#313244",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#CDD6F4",
    fontFamily: "monospace",
  },
  indexRow: {
    flexDirection: "row",
    gap: 8,
  },
  indexInput: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  removeButton: {
    flex: 0,
    paddingHorizontal: 20,
  },
  utilButton: {
    flex: 1,
  },
  utilRow: {
    flexDirection: "row",
    gap: 8,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#CDD6F4",
  },
  darkButtonText: {
    color: "#1E1E2E",
  },
  greenButton: {
    backgroundColor: "#2D4F2D",
  },
  pinkButton: {
    backgroundColor: "#4F2D3A",
  },
  blueButton: {
    backgroundColor: "#2D3A4F",
  },
  redButton: {
    backgroundColor: "#5C2D2D",
  },
  yellowButton: {
    backgroundColor: "#F9E2AF",
  },
  grayButton: {
    backgroundColor: "#313244",
  },
});