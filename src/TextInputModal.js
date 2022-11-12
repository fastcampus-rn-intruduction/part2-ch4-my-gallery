import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
} from "react-native";
import styled from 'styled-components/native';

const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  position: absolute;
  bottom: 0px;
`;
const AlbumTitleTextInput = styled.TextInput`
  width: 100%;
  padding: 10px;
  border-width: 0.5px;
  border-color: lightgrey;
  background-color: white;
`;

const Content = ({
  albumTitle,
  setAlbumTitle,
  onSubmitEditing,
  onPressBackdrop,
}) => {
  return (
    <Pressable onPress={onPressBackdrop} style={{ flex: 1 }}>
      <SafeAreaViewContainer>
        <AlbumTitleTextInput
          placeholder="앨범명을 입력해주세요"
          value={albumTitle}
          onChangeText={setAlbumTitle}
          onSubmitEditing={onSubmitEditing}
          autoFocus={true}
        />
      </SafeAreaViewContainer>
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
