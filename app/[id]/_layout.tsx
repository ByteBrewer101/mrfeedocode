import { hotels } from "@/store/exampledata/exampledata";
import { Stack, useLocalSearchParams } from "expo-router";

export default function PageLayout() {

    const{id} = useLocalSearchParams()
    
const name = (hotels.find((hotel) => hotel.id === id) || { name: "" }).name;
 
    

    


  return (
    <Stack>
      <Stack.Screen name="index" options={{ title:name? String(name):"This Hotel is not serving"}} />
    </Stack>
  );
}
