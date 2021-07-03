import React, { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Navbar from "./components/Navbar";
import AddTodo from "./components/Todo/AddTodo";
import TodoList from "./components/Todo/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  return (
    <View style={styles.mainWrapper}>
      <View>
        <Navbar title="Owren" />
        <AddTodo addTodo={addTodo} />
      </View>

      <ScrollView style={styles.container}>
        <TodoList todos={todos} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 15,
  },
});
