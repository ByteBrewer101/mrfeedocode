
import { Link, useRouter } from "expo-router";

import { Text, View, StyleSheet } from "react-native";
import { Pressable } from "react-native";

export default function Index() {


   const nav = useRouter()

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>{nav.push("/home")}} >
        <Text>
            Home
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
