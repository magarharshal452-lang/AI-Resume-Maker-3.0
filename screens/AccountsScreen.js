import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { FinanceContext } from "../context/FinanceContext";

export default function AccountsScreen() {
  const { accounts, setAccounts } = useContext(FinanceContext);

  const [name, setName] = useState("");
  const [balance, setBalance] = useState("");

  const addAccount = () => {
    if (!name || !balance) return;
    setAccounts([...accounts, { id: Date.now(), name, balance: Number(balance) }]);
    setName("");
    setBalance("");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.header}>Accounts</Text>

      <TextInput placeholder="Account name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Starting balance" value={balance} onChangeText={setBalance} style={styles.input} keyboardType="numeric" />

      <TouchableOpacity style={styles.btn} onPress={addAccount}>
        <Text style={styles.btnText}>Add Account</Text>
      </TouchableOpacity>

      <FlatList
        data={accounts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>₹{item.balance}</Text>
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
    borderRadius: 10,
    padding: 12,
    marginTop: 15,
    borderColor: "#007bff"
  },
  btn: {
    backgroundColor: "#007bff",
    padding: 15,
    marginTop: 20,
    borderRadius: 10
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16 },
  item: {
    padding: 15,
    backgroundColor: "#eef5ff",
    borderRadius: 10,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

