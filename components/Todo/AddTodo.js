import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

export default function AddTodo({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  function addTodoHandler() {
    if (!inputValue.trim()) return Alert.alert("Todo name cannot be empty!");

    addTodo(inputValue);
    clearInput();
  }

  function clearInput() {
    setInputValue("");
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Add todo..."
        value={inputValue}
        onSubmit={addTodoHandler}
        onChangeText={(text) => setInputValue(text)}
        autoCorrect={false}
      />

      <TouchableOpacity style={styles.button} onPress={addTodoHandler}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 10,
    elevation: 5,
  },
  input: {
    width: "70%",
    borderWidth: 1,
    borderColor: "#000",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: "#000",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  buttonText: {
    color: "#fff",
  },
});
