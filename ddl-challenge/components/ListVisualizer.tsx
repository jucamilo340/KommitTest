import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { NodeCard } from "./Nodecard";
import { ArrowConnector } from "./Arrowconnector";

interface ListVisualizerProps {
  nodes: string[];
  highlightIndex: number | null;
}

function ListVisualizerComponent({
  nodes,
  highlightIndex,
}: ListVisualizerProps) {
  if (nodes.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyIcon}>◇</Text>
        <Text style={styles.emptyText}>Empty list</Text>
        <Text style={styles.emptySubtext}>
          Insert a node to get started
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {nodes.map((value, index) => (
          <React.Fragment key={`${index}-${value}`}>
            <NodeCard
              value={value}
              index={index}
              isHead={index === 0}
              isTail={index === nodes.length - 1}
              highlightIndex={highlightIndex}
            />
            {index < nodes.length - 1 && <ArrowConnector />}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

export const ListVisualizer = React.memo(ListVisualizerComponent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181825",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#313244",
    marginHorizontal: 16,
    minHeight: 130,
    justifyContent: "center",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  emptyContainer: {
    backgroundColor: "#181825",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#313244",
    borderStyle: "dashed",
    marginHorizontal: 16,
    minHeight: 130,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  emptyIcon: {
    fontSize: 28,
    color: "#45475A",
    marginBottom: 6,
  },
  emptyText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#585B70",
  },
  emptySubtext: {
    fontSize: 12,
    color: "#45475A",
    marginTop: 2,
  },
});