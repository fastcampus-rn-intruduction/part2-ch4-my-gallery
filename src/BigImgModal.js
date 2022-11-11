import { Image, Modal, Pressable, View } from "react-native"

export default ({ modalVisible, onPressBackdrop, selectedImage }) => {
  return (
    <Modal 
      animationType="fade"
      transparent={true}
      visible={modalVisible}>
      <Pressable 
        onPress={onPressBackdrop} 
        style={{ 
          flex: 1, 
          backgroundColor: `rgba(115, 115, 115, 0.5)`,
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Pressable>
            <Image 
              source={{ uri: selectedImage?.uri }} 
              style={{ width: 280, height: 280, backgroundColor: "white" }} 
              resizeMode="contain" 
            />
          </Pressable>
      </Pressable>
    </Modal>
  )
}