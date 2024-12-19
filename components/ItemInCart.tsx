import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Counter from "./Counter";

interface ItemDetailsProps {
  id: string;
  name: string;
  price: number;
}

export default function ItemDetails({ id, name, price }: ItemDetailsProps) {
  const [count, setCount] = useState(10); // Initial count set to 10

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // Prevent going below 0

  return (
    <View style={styles.container}>
      <Text style={styles.id}>
        ID: <Text style={styles.boldText}>{id}</Text>
      </Text>
      <Text style={styles.name}>
        Name: <Text style={styles.boldText}>{name}</Text>
      </Text>
      <Text style={styles.price}>
        Price: <Text style={styles.boldText}>${price.toFixed(2)}</Text>
      </Text>
      <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 20,
  },
  id: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    color: "#333",
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    color: "#333",
  },
  boldText: {
    fontWeight: "bold",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    gap: 10,
  },
  buttonBack: {
    backgroundColor: "#ff6a00",
    borderRadius: 50,
    padding: 12,
    width: 40, // Increase touchable area for better UX
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  counterText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
