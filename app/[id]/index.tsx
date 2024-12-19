import { useLocalSearchParams } from "expo-router";
import { View, Text, FlatList } from "react-native";
import { hotelMenus } from "@/store/exampledata/exampledata";
import Clickable from "@/components/Clickable";
import { useState } from "react";
import AddToCartModal from "@/components/AddToCartModal";
import ItemDetails from "@/components/ItemInCart";

export default function HotelPage() {
  const { id } = useLocalSearchParams();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<any>(null); // Store selected item here
  const [selectedID,setSelectedID] = useState<any>(null)

  

  // Find the menu based on the hotel id
  const menu = hotelMenus.find((hotel) => hotel.hotelId === id)?.menu || [];



  // Handle item selection and show modal
  const handleItemClick = (item: any) => {
   
    setItemSelected(item);
     setSelectedID(item.id);
    setIsModalVisible(true); // Show the modal
  };

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={menu}
        renderItem={({ item }) => (
          <Clickable
            label={item.name}
            onPress={() => handleItemClick(item)} // Set selected item when clicked
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text>No menu items available.</Text>}
      />
      <AddToCartModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)} // Close the modal
      >
        {itemSelected && ( // Ensure item is selected before displaying data
          <ItemDetails
            id={itemSelected.id}
            name={itemSelected.name}
            price={itemSelected.price}
            
          />

          
        )}
      </AddToCartModal>
    </View>
  );
}
