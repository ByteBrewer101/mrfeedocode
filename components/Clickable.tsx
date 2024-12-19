import { TouchableOpacity ,Text,StyleSheet} from "react-native";


interface propTypes {

    label:string,
    onPress :()=>void

}

export default function Clickable ({label,onPress}:propTypes){

    return <TouchableOpacity style={styles.item} onPress={onPress} >
        <Text style={styles.title} >
            {label}

        </Text>
    </TouchableOpacity>
    
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: "#ff6a00",
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 20,
    // Shadow for iOS
    shadowColor: "#000", // Color of the shadow
    shadowOffset: { width: 0, height: 4 }, // Shadow position (horizontal, vertical)
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 10, // Shadow blur radius
    // Shadow for Android
    elevation: 5, // Elevation for Android shadow effect
  },

  title: {
    fontSize: 20,
    color: "white",
  },
});