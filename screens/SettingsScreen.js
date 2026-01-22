import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.header}>Settings</Text>
      <Text>Theme, currency, reset data options here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 24, fontWeight: "bold", color: "#007bff" }
});

