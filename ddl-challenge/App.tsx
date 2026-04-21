import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useDoublyLinkedList } from "./hooks/useDoublyLinkedList";
import { ListStateDisplay } from "./components/ListStateDisplay";
import { ListVisualizer } from "./components/ListVisualizer";
import { SearchResult } from "./components/Searchresult";
import { OperationsPanel } from "./components/Operationspanel";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const {
    state,
    searchResult,
    insertHead,
    insertTail,
    removeAtIndex,
    removeDuplicates,
    search,
    clear,
    clearSearch,
  } = useDoublyLinkedList();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#11111B" />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.flex}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.title}>Doubly Linked List</Text>
            <Text style={styles.subtitle}>Interactive Visualizer</Text>
          </View>

          <ListStateDisplay
            headValue={state.headValue}
            tailValue={state.tailValue}
            size={state.size}
          />

          <ListVisualizer
            nodes={state.nodes}
            highlightIndex={searchResult?.index ?? null}
          />

          {searchResult && (
            <SearchResult data={searchResult} onDismiss={clearSearch} />
          )}

          <OperationsPanel
            onInsertHead={insertHead}
            onInsertTail={insertTail}
            onRemoveAtIndex={removeAtIndex}
            onRemoveDuplicates={removeDuplicates}
            onSearch={search}
            onClear={clear}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#11111B",
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
    gap: 16,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#CDD6F4",
  },
  subtitle: {
    fontSize: 13,
    color: "#6C7086",
    marginTop: 2,
  },
});