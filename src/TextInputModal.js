import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  TextInput,
} from "react-native";

const Content = ({
  albumTitle,
  setAlbumTitle,
  onSubmitEditing,
  onPressBackdrop,
}) => {
  return (
    <Pressable onPress={onPressBackdrop} style={{ flex: 1 }}>
      <SafeAreaView
        style={{ flex: 1, width: "100%", position: "absolute", bottom: 0 }}
      >
        <TextInput
          placeholder="앨범명을 입력해주세요"
          style={{
            width: "100%",
            padding: 10,
            borderWidth: 0.5,
            borderColor: "lightgrey",
            backgroundColor: "white",
          }}
          value={albumTitle}
          onChangeText={setAlbumTitle}
          onSubmitEditing={onSubmitEditing}
          autoFocus={true}
        />
      </SafeAreaView>
    </Pressable>
  );
};

export default ({
  modalVisible,
  albumTitle,
  setAlbumTitle,
  onSubmitEditing,
  onPressBackdrop,
}) => {
  if (Platform.OS === "ios") {
    return (
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Content
            albumTitle={albumTitle}
            setAlbumTitle={setAlbumTitle}
            onSubmitEditing={onSubmitEditing}
            onPressBackdrop={onPressBackdrop}
          />
        </KeyboardAvoidingView>
      </Modal>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{}}
    >
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <Content
          albumTitle={albumTitle}
          setAlbumTitle={setAlbumTitle}
          onSubmitEditing={onSubmitEditing}
          onPressBackdrop={onPressBackdrop}
        />
      </Modal>
    </KeyboardAvoidingView>
  );
};
