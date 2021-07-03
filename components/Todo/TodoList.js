import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TodoList({ todos }) {
  return (
    <View style={styles.todoListWrapper}>
      {todos.map((todo, index) => (
        <View style={styles.todoListItem} key={todo.id}>
          <Text style={styles.todoListItemIndex}>{index + 1}</Text>
          <Text style={styles.todoListItemText}>{todo.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  todoListWrapper: {
    marginTop: 10,
  },
  todoListItem: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoListItemText: {
    color: "#fff",
    backgroundColor: "#000",
    width: "88%",
    padding: 10,
    borderRadius: 5,
  },
  todoListItemIndex: {
    justifyContent: "center",
    textAlign: "center",
    width: "10%",
    padding: 10,
    color: "#fff",
    backgroundColor: "#000",
    borderRadius: 5,
  },
});
