import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { FinanceContext } from "../context/FinanceContext";

export default function BudgetsScreen() {
  const { budgets, setBudgets } = useContext(FinanceContext);
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  const addBudget = () => {
    if (!category || !limit) return;
    setBudgets([...budgets, { id: Date.now(), category, limit: Number(limit) }]);
    setCategory("");
    setLimit("");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.header}>Budgets</Text>

      <TextInput placeholder="Category" value={category} onChangeText={setCategory} style={styles.input} />
      <TextInput placeholder="Monthly Limit" value={limit} onChangeText={setLimit} style={styles.input} keyboardType="numeric" />

      <TouchableOpacity style={styles.btn} onPress={addBudget}>
        <Text style={styles.btnText}>Add Budget</Text>
      </TouchableOpacity>

      <FlatList
        data={budgets}
        keyExtractor={b => b.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.category}</Text>
            <Text>Limit: ₹{item.limit}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 24, fontWeight: "bold", color: "#007bff" },
  input: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: "#007bff",
    marginTop: 15
  },
  btn: { backgroundColor: "#007bff", padding: 15, marginTop: 20, borderRadius: 10 },
  btnText: { color: "white", textAlign: "center", fontSize: 16 },
  item: {
    padding: 15,
    backgroundColor: "#eef5ff",
    borderRadius: 10,
    marginTop: 15
  }
});

