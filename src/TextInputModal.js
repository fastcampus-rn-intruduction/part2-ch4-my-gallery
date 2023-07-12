import { useEffect, useRef } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  TextInput,
} from "react-native";
import styled from "styled-components/native";

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
  textInputFocusRef,
  albumTitle,
  setAlbumTitle,
  onSubmitEditing,
  onPressBackdrop,
}) => {
  return (
    <Pressable onPress={onPressBackdrop} style={{ flex: 1 }}>
      <SafeAreaViewContainer>
        <AlbumTitleTextInput
          ref={textInputFocusRef}
          placeholder="앨범명을 입력해주세요"
          value={albumTitle}
          onChangeText={setAlbumTitle}
          onSubmitEditing={onSubmitEditing}
          // style={{
          //   width: "100%",
          //   padding: 10,
          //   borderWidth: 0.5,
          //   borderColor: "lightgrey",
          //   backgroundColor: "white",
          // }}
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
  const textInputFocusRef = useRef(null);

  useEffect(() => {
    // 모달이 열릴 때마다 TextInput에 focus를 준다.
    if (modalVisible) {
      setTimeout(() => {
        textInputFocusRef.current?.focus();
      }, 100); // 약간의 시간차가 있어야 TextInput에 focus가 먹힌다.
    }
  }, [modalVisible]);

  if (Platform.OS === "ios") {
    return (
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Content
            textInputFocusRef={textInputFocusRef}
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
          textInputFocusRef={textInputFocusRef}
          albumTitle={albumTitle}
          setAlbumTitle={setAlbumTitle}
          onSubmitEditing={onSubmitEditing}
          onPressBackdrop={onPressBackdrop}
        />
      </Modal>
    </KeyboardAvoidingView>
  );
};
