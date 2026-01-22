import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function InsightsScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.header}>Insights</Text>
      <Text>Charts & analytics will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 24, fontWeight: "bold", color: "#007bff" }
});

