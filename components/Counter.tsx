import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  // Increment the counter
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement the counter (don't go below 0)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={decrement}>
        <Ionicons name="remove-circle-outline" size={32} color="#ff6a00" />
      </TouchableOpacity>

      <Text style={styles.counter}>{count}</Text>

      <TouchableOpacity style={styles.button} onPress={increment}>
        <Ionicons name="add-circle-outline" size={32} color="#ff6a00" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  
  },
  button: {
  
   
    borderRadius: 50,
    marginHorizontal: 20,
    height:40,
    width:40,
    justifyContent:"center",
    alignItems:"center"
    
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center"
  },
  counter: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
});
