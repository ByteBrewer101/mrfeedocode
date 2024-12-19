import { Modal, View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { PropsWithChildren, useState, useEffect } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function AddToCartModal({ isVisible, children, onClose }: Props) {
  const [slideAnim] = useState(new Animated.Value(500)); // Start with the modal below the screen
  const [visible, setVisible] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
      Animated.spring(slideAnim, {
        toValue: 0, // Move to the top
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(slideAnim, {
        toValue: 500, // Slide down to hide
        useNativeDriver: true,
      }).start(() => setVisible(false)); // Hide the modal after animation
    }
  }, [isVisible, slideAnim]);

  return (
    <Modal transparent={true} visible={visible}>
      <Animated.View
        style={[
          styles.modalContent,
          {
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose quantity</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        {children}
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: "auto",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 0,
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#ff6a00",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});
