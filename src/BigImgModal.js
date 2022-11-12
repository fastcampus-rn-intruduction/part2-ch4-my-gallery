import { Image, Modal, Pressable } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const ArrowButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  padding: 0px 20px;
  height: 100%;
`;
const ModalContainer = styled.Pressable`
  flex: 1;
  flex-direction: row;
  background-color: rgba(115, 115, 115, 0.5);
  justify-content: center;
  align-items: center;
`;

const ArrowButton = ({ iconName, onPress, disabled }) => {
  return (
    <ArrowButtonContainer disabled={disabled} onPress={onPress}>
      <SimpleLineIcons
        name={iconName}
        size={20}
        color={disabled ? "transparent" : "black"}
      />
    </ArrowButtonContainer>  
  )
}

export default ({ 
  modalVisible, 
  onPressBackdrop, 
  selectedImage,
  onPressLeftArrow,
  onPressRightArrow,
  showPreviousArrow,
  showNextArrow,
}) => {
  return (
    <Modal 
      animationType="fade"
      transparent={true}
      visible={modalVisible}>
      <ModalContainer onPress={onPressBackdrop}>
          {/* < 화살표 */}   
          <ArrowButton 
            iconName="arrow-left" 
            onPress={onPressLeftArrow} 
            disabled={!showPreviousArrow}
            /> 

          {/* 이미지 */}
          <Pressable>
            <Image 
              source={{ uri: selectedImage?.uri }} 
              style={{ width: 280, height: 280, backgroundColor: "white" }} 
              resizeMode="contain" 
              />
          </Pressable>

          {/* > 화살표 */}  
          <ArrowButton
            iconName="arrow-right" 
            onPress={onPressRightArrow} 
            disabled={!showNextArrow}
          />    
      </ModalContainer>
    </Modal>
  )
}