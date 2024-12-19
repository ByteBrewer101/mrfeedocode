import cartState from "@/store/RecoilLogic/atoms";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRecoilValue } from "recoil";

export default function CartPage() {
 
  const items = useRecoilValue(cartState)

  console.log(items);


  return (
    <SafeAreaView>
      <View>
        <Text>{items[0].numberOfItems}</Text>
      </View>
    </SafeAreaView>
  );
}
