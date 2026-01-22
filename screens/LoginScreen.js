import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { FinanceContext } from "../context/FinanceContext";

export default function LoginScreen({ navigation }) {
  const { setUserName } = useContext(FinanceContext);
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DhanFlow</Text>

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (name.trim() === "") return;
          setUserName(name);
          navigation.replace("Tabs");
        }}
      >
        <Text style={styles.btnText}>Enter App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 32, fontWeight: "bold", color: "#007bff" },
  input: {
    width: "80%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 10,
    marginTop: 20
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    width: "80%"
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16 }
});

