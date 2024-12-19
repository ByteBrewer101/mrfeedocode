import Clickable from "@/components/Clickable";
import { View, Text,StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { hotels } from "@/store/exampledata/exampledata";
import { useRouter } from "expo-router";




//functions 





export default function HomePage() {
  const DATA = hotels;
  const nav = useRouter();
  const handleClick = (id:string) => {
    nav.push(`/${id}`);
  };
  return (
    <SafeAreaView>
      <View>
        
        <FlatList
          data={DATA}
          renderItem={({item})=><Clickable label={item.name} onPress={()=>handleClick(item.id)}/>}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius:20
  },
  title: {
    fontSize: 32,
  },
});