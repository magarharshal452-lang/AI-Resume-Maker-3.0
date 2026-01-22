import React, { useContext } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { FinanceContext } from "../context/FinanceContext";

export default function TransactionsScreen({ navigation }) {
  const { transactions } = useContext(FinanceContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={styles.header}>Transactions</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("AddTransaction")}
      >
        <Text style={styles.btnText}>+ Add Transaction</Text>
      </TouchableOpacity>

      <FlatList
        data={transactions}
        keyExtractor={t => t.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
            <Text style={{ color: item.type === "income" ? "green" : "red" }}>
              ₹{item.amount}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 24, fontWeight: "bold", color: "#007bff" },
  btn: { backgroundColor: "#007bff", padding: 15, borderRadius: 10, marginVertical: 15 },
  btnText: { color: "white", textAlign: "center", fontSize: 16 },
  item: {
    padding: 15,
    backgroundColor: "#eef5ff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12
  }
});

