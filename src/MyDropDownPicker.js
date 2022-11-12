import { Text, View } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const headerHeight = 50;
const HeaderContainer = styled.Pressable`
  height: ${headerHeight}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const AddAlbumBtnContainer = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  height: ${headerHeight}px;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
`;
const AddAlbumText = styled.Text`
  font-size: 12px;
`;
const DropdownContainer = styled.View`
  position: absolute;
  top: ${headerHeight}px;
  width: 100%;
  border-top-color: lightgrey;
  border-top-width: 0.5px;
  border-bottom-color: lightgrey;
  border-bottom-width: 0.5px;
`;
const AlbumTitleContainer = styled.Pressable`
  padding: 12px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`;
const AlbumTitleText = styled.Text`
  font-weight: ${({ isSelectedAlbum }) => isSelectedAlbum ? "bold" : "normal"};
`;

export default ({ 
  isDropdownOpen, 
  onPressHeader, 
  selectedAlbum,
  onPressAddAlbum, 
  albums, 
  onPressAlbum,
  onLongPressAlbum,
}) => {
  return (
    <View>
      <HeaderContainer  onPress={onPressHeader}>
        <Text style={{ fontWeight: "bold" }}>{selectedAlbum.title}</Text>
        <SimpleLineIcons
          name={isDropdownOpen ? "arrow-up" : "arrow-down"}
          size={12}
          color="black"
          style={{ marginLeft: 8 }}
        />

        <AddAlbumBtnContainer onPress={onPressAddAlbum}>
          <AddAlbumText>앨범 추가</AddAlbumText>
        </AddAlbumBtnContainer>
      </HeaderContainer>

      {isDropdownOpen && (
        <DropdownContainer>
          {albums.map((album, index) => {
            const isSelectedAlbum = album.id === selectedAlbum.id;
            return (
              <AlbumTitleContainer
                key={`album-${index}`}
                onPress={() => onPressAlbum(album)}
                onLongPress={() => onLongPressAlbum(album.id)}
              >
                <AlbumTitleText isSelectedAlbum={isSelectedAlbum}>{album.title}</AlbumTitleText>
              </AlbumTitleContainer>
            );
          })}
        </DropdownContainer>
      )}
    </View>
  );
};