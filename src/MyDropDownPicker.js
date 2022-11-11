import { Text, TouchableOpacity, View } from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';

const headerHeight = 50;

export default ({ 
  isDropdownOpen, 
  onPressHeader, 
  selectedAlbum,
  onPressAddAlbum, 
  albums, 
  onPressAlbum,
}) => {
  return (
    <View>
      <TouchableOpacity 
        activeOpacity={1}
        onPress={onPressHeader}
        style={{ 
          height: headerHeight, 
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}>
        <Text style={{ fontWeight: "bold" }}>{selectedAlbum.title}</Text>
        <SimpleLineIcons
          name={isDropdownOpen ? "arrow-down" : "arrow-up"}
          size={12}
          color="black"
          style={{ marginLeft: 8 }}
        />

        <TouchableOpacity 
          onPress={onPressAddAlbum}
          style={{ 
            position: "absolute", 
            right: 0, 
            height: headerHeight,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            }}>
          <Text style={{ fontSize: 12 }}>앨범 추가</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {isDropdownOpen && (
        <View 
          style={{ 
            position: "absolute",
            top: headerHeight,
            width: "100%", 
            borderTopColor: "lightgrey",
            borderTopWidth: 0.5,
            borderBottomColor: "lightgrey",
            borderBottomWidth: 0.5,
          }}>
          {albums.map((album, index) => {
            const isSelectedAlbum = album.id === selectedAlbum.id;
            return (
              <TouchableOpacity
                key={`album-${index}`}
                style={{
                  paddingVertical: 12,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF"
                }}
                onPress={() => onPressAlbum(album)}
              >
                <Text style={{ fontWeight: isSelectedAlbum ? "bold" : undefined }}>{album.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};