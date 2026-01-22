import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FinanceContext } from "../context/FinanceContext";

export default function HomeScreen() {
  const { transactions } = useContext(FinanceContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((n, t) => n + t.amount, 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((n, t) => n + t.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>

      <View style={styles.card}>
        <Text>Total Income: ₹{income}</Text>
        <Text>Total Expenses: ₹{expenses}</Text>
        <Text>Net Savings: ₹{income - expenses}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", color: "#007bff" },
  card: {
    backgroundColor: "#eef5ff",
    padding: 20,
    borderRadius: 12,
    marginTop: 20
  }
});

