import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FinanceContext } from "../context/FinanceContext";

export default function AddTransactionScreen({ navigation }) {
  const { setTransactions, transactions } = useContext(FinanceContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const save = () => {
    if (!title || !amount) return;

    setTransactions([
      ...transactions,
      { id: Date.now(), title, amount: Number(amount), type }
    ]);

    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.header}>Add Transaction</Text>

      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} style={styles.input} keyboardType="numeric" />

      <TouchableOpacity onPress={() => setType("income")} style={styles.typeBtn}>
        <Text>Income</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setType("expense")} style={styles.typeBtn}>
        <Text>Expense</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={save}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 24, fontWeight: "bold", color: "#007bff" },
  input: { borderWidth: 1, padding: 15, borderRadius: 10, marginTop: 15, borderColor: "#007bff" },
  typeBtn: {
    padding: 15,
    marginTop: 15,
    backgroundColor: "#eef5ff",
    borderRadius: 10
  },
  btn: { marginTop: 20, backgroundColor: "#007bff", padding: 15, borderRadius: 10 },
  btnText: { color: "white", textAlign: "center", fontSize: 16 }
});

