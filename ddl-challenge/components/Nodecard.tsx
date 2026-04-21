import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NodeCardProps {
  value: string;
  index: number;
  isHead: boolean;
  isTail: boolean;
  highlightIndex: number | null;
}

function NodeCardComponent({
  value,
  index,
  isHead,
  isTail,
  highlightIndex,
}: NodeCardProps) {
  const isHighlighted = highlightIndex === index;

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.card,
          isHead && styles.headCard,
          isTail && styles.tailCard,
          isHead && isTail && styles.headTailCard,
          isHighlighted && styles.highlightedCard,
        ]}
      >
        <View style={styles.pointerRow}>
          <Text style={styles.pointerText}>{isHead ? "null" : "← prev"}</Text>
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.valueText} numberOfLines={1}>
            {value}
          </Text>
        </View>

        <View style={styles.pointerRow}>
          <Text style={styles.pointerText}>{isTail ? "null" : "next →"}</Text>
        </View>
      </View>

      <View style={styles.labelRow}>
        <Text style={styles.indexText}>idx: {index}</Text>
        {isHead && <Text style={styles.badge}>HEAD</Text>}
        {isTail && <Text style={styles.badge}>TAIL</Text>}
      </View>
    </View>
  );
}

export const NodeCard = React.memo(NodeCardComponent);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginHorizontal: 4,
  },
  card: {
    width: 90,
    backgroundColor: "#1E1E2E",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#45475A",
    paddingVertical: 6,
    alignItems: "center",
  },
  headCard: {
    borderColor: "#A6E3A1",
  },
  tailCard: {
    borderColor: "#F38BA8",
  },
  headTailCard: {
    borderColor: "#F9E2AF",
  },
  highlightedCard: {
    borderColor: "#89B4FA",
    backgroundColor: "#1E2A45",
  },
  pointerRow: {
    paddingVertical: 2,
  },
  pointerText: {
    fontSize: 9,
    color: "#6C7086",
    fontFamily: "monospace",
  },
  valueContainer: {
    backgroundColor: "#313244",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginVertical: 4,
    minWidth: 50,
    alignItems: "center",
  },
  valueText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#CDD6F4",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  indexText: {
    fontSize: 10,
    color: "#6C7086",
    fontFamily: "monospace",
  },
  badge: {
    fontSize: 9,
    fontWeight: "800",
    color: "#1E1E2E",
    backgroundColor: "#F9E2AF",
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
    overflow: "hidden",
  },
});